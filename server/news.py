from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import re
import numpy as np
import pandas as pd
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer

app = Flask(__name__)
CORS(app)

# Function to scrape only visible text from the given URLlll
def scrape_visible_text_from_url(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')

        # Remove script, style, and other non-visible tags
        for tag in soup(["script", "style", "meta", "link", "noscript", "header", "footer", "aside", "nav", "img"]):
            tag.extract()

        # Get the header content
        header_content = soup.find("header")
        header_text = header_content.get_text() if header_content else ""

        # Get the paragraph content
        paragraph_content = soup.find_all("p")
        paragraph_text = " ".join([p.get_text() for p in paragraph_content])

        # Combine header and paragraph text
        visible_text = f"{header_text}\n\n{paragraph_text}"

        # Remove multiple whitespaces and newlines
        visible_text = re.sub(r'\s+', ' ', visible_text)
        return visible_text.strip()
    except Exception as e:
        print(f"Error occurred while scraping the data: {e}")
        return None
    
@app.route("/scrape", methods=["POST"])
def scrape():
    try:
        # Get the URL from the POST request
        url = request.json.get("url")

        if not url:
            return jsonify({"error": "URL parameter is missing"}), 400

        # Call the scrape_visible_text_from_url function
        scraped_text = scrape_visible_text_from_url(url)

        if scraped_text:
            return jsonify({"scraped_text": scraped_text})
        else:
            return jsonify({"error": "Failed to scrape visible text from the URL"}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500



device = 'cuda' if torch.cuda.is_available() else 'cpu'
itop = {0: "Negative", 1: "Neutral", 2: "Positive"}

class Predictor():
    def __init__(self, model='leroyrr/bert-base-head', use_peft=False):
        self.model = AutoModelForSequenceClassification.from_pretrained(model).to(device)
        self.tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')

    def preprocess(self, inputs: list):
        tokens = self.tokenizer(inputs, return_tensors="pt", truncation=True, padding=True, max_length=512).to(device)
        return tokens

    def postprocess(self, logits):
        preds = int(torch.argmax(logits, dim=1).detach().cpu())
        prediction_label = f"Sentiment: {itop[preds]}"
        return prediction_label

    def predict(self, inputs: str):
        tokens = self.preprocess([inputs])
        with torch.no_grad():
            logits = self.model(**tokens).logits
        return self.postprocess(logits)
    
# Load BERT model
predictor = Predictor()


def get_top_news(api_key, country='in', category='general' , page_size=100):
    endpoint = 'https://newsapi.org/v2/top-headlines'
    params = {
        'country': country,
        'category': category,
        'q':'',
        'pageSize': page_size,
        'apiKey': api_key
    }

    try:
        response = requests.get(endpoint, params=params)
        data = response.json()

        if response.status_code == 200 and data['status'] == 'ok':
            articles = data['articles']
            return articles
        else:
            print(f"Error: {data['message']}")
            return None
    except Exception as e:
        print(f"Error: {str(e)}")
        return None
    
# filter indian gov
# def filter_indian_government_news(articles):
#     indian_government_keywords = ['Indian government', 'Government of India', 'Modi', 'BJP', 'Congress', 'Indian Parliament']
#     filtered_news = []

#     for article in articles:
#         for keyword in indian_government_keywords:
#             if keyword.lower() in article['title'].lower() or keyword.lower() in article.get('description', '').lower():
#                 filtered_news.append(article)
#                 break

#     return filtered_news

@app.route("/news")
def news():
    api_key = "62f83385e0304accba970b1a0ac64296"  # Replace with your actual API key
    news_articles = get_top_news(api_key, country='in', category='general', page_size=100)

    results=[]

    for index, news in enumerate(news_articles, start=1):
    
        result = predictor.predict(str(news['description']))
        news_data = {
        'index':index,
        'description': news['description'],
        'url': news['url'],
        'result': result,
        }
        results.append(news_data)

    return results

        # print scrape function
        # data = scrape_visible_text_from_url(news['url'])
        # if data:
        #     print("Visible text successfully scraped!")
        #     print("Scraped Text:")
        #     print(data)
        #     print('\n\n\n')
        # else:
        #     print("Failed to scrape visible text from the URL.")

        # print sentiment function
        # result = predictor.predict(str(news['description']))
        # print(f"Input: {news['title']}")
        # print(f"Input: {news['description']}")
        # print(f"link: {news['url']}")
        # print(f"Prediction: {result}")
        # print("=" * 30)


    # if news_articles:
    #     indian_government_news = filter_indian_government_news(news_articles)

        # for index, news in enumerate(news_articles, start=1):
        #     print(f"{index}. {news}.\n")

    #     if indian_government_news:
    #         print("Top news articles related to the Indian government:")
    #         for index, news in enumerate(indian_government_news, start=1):
    #             print(f"{index}. {news}\n")
    #     else:
    #         print("No relevant news articles found.")
    # else:
    #     print("Failed to fetch news articles.")

    

if __name__ == "__main__":
    # main()
    app.run(debug=True)
