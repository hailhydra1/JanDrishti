import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React, { useContext, useEffect, useState } from "react";
import { JanDrishtiContext } from "../../../context/Context";
import { Input } from "@nextui-org/input";
import { Send } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import axios from "axios";
import { Spinner } from "@nextui-org/spinner";

function Chatbot() {
  const {
    loading,
    setLoading,
    newsURL,
    setNewsURL,
  } = useContext(JanDrishtiContext);
  const [input, setInput] = useState("");
  const [article, setArticle] = useState("");
  const [messageHistory, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle user input
  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  // Function to make POST request to tinyllama API
  async function makeChatRequest() {
    try {
      setIsLoading(true);

      const body = {
        model: "articleAssistant",
        messages: messageHistory,
        stream: false,
      };

      const result = await axios.post("http://localhost:11434/api/chat", body);

      const assistantMessage = result.data.message;

      setHistory((prevHistory) => [
        ...prevHistory,
        { role: "assistant", content: assistantMessage.content },
      ]);

      console.log("RESULT!!!" + JSON.stringify(result.data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  // Function to handle user input and make POST request to tinyllama API
  async function handleClick() {
    if (input.trim() !== "") {
      setHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: input },
      ]);
    }

    setInput("");

    await makeChatRequest();
  }

  // Function to scrape article when newsURL changes
  useEffect(() => {
    async function ArticleScrape() {
      try {
        setIsLoading(true);

        if (newsURL && newsURL !== "") {
          const result = await axios.post("http://localhost:5000/scrape", {
            url: newsURL,
          });

          setArticle(result.data.scraped_text);
          setHistory((prevHistory) => [
            ...prevHistory,
            { role: "user", content: result.data.scraped_text },
          ]);

          console.log("RESULT" + result.data.scraped_text);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    ArticleScrape();
  }, [newsURL]);

  // Function to handle assistant's response when messageHistory changes
  useEffect(() => {
    async function handleAssistantResponse() {
      const lastMessage =
        messageHistory.length > 0
          ? messageHistory[messageHistory.length - 1]
          : null;

      if (lastMessage && lastMessage.role === "user") {
        await makeChatRequest();
      }
    }

    handleAssistantResponse();
  }, [messageHistory]);

  return (
    <div className="flex flex-row gap-5 justify-center m-5">
      <div className="w-1/2">
        <Card className="h-unit-8xl">
          <CardHeader className="font-semibold text-lg"></CardHeader>
          <Divider />
          <CardBody>{article}</CardBody>
        </Card>
      </div>
      <div className="w-1/2 ">
        <Card className="h-unit-8xl mb-2">
          {isLoading && <Spinner size="lg" />}
          <CardBody>
            {/* Display message history in the CardBody */}
            {messageHistory.map((message, index) =>
              index > 1 ? (
                <div key={index} className={message.role}>
                  <p className="m-2">{message.content}</p>
                  <Divider className="m-2" />
                </div>
              ) : null
            )}
          </CardBody>
        </Card>
        <div className="flex flex-row justify-center items-center gap-5">
          <Input
            label="Enter your prompt"
            value={input}
            onChange={handleChange}
            variant="faded"
          />
          <Button
            onClick={handleClick}
            className="scale-125"
            isIconOnly
            variant="ghost"
          >
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
