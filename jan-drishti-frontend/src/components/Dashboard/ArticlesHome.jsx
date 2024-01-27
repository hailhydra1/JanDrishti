import react, {useState, useEffect} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import axios from "axios"


function ArticlesHome(){
  const [news,setNews] = useState([]);

  const getdata = async() => {
    try {
      const list= await axios.get("http://localhost:5000/news") 
      console.log(list.data);
      setNews(list.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata(); // Fetch data when component mounts
  }, []);


    return(
      <>
      {/* {news.map((item, index) => (
        <div key={index}>
          <p>{item.description}</p>
          <p>{item.result}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      ))} */}

        <Table className="w-unit-9xl h-unit-5xl" isStriped color="primary" selectionMode="single" >
        <TableHeader >
          <TableColumn className="text-xl">Article</TableColumn>
          <TableColumn className="text-xl" >Sentiment</TableColumn>
          {/* <TableColumn className="text-xl">View</TableColumn> */}
        </TableHeader>
        <TableBody>
        {news.map((item,index)=>(
          <TableRow key={item.index}>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.result}</TableCell>
          {/* <TableCell>Active</TableCell> */}
          </TableRow>
        ))}
          

        </TableBody>
      </Table>
      </>
    )
}

export default ArticlesHome 