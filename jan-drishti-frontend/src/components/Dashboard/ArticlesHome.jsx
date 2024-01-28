import react, {useState, useEffect, useContext} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import { JanDrishtiContext } from "../../context/Context";
import axios from "axios"


function ArticlesHome(){

  const{newsURL, setNewsURL,isNewsSelected,setNewsSelected,news,setNews} = useContext(JanDrishtiContext)

  const getdata = async() => {
    try {
      const list= await axios.get("http://localhost:5000/") 
      setNews(list.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata(); // Fetch data when component mounts
  }, []);

  function handleClick(url){
    setNewsURL(url)
    setNewsSelected(true)
  }

    return(
      <>
        <Table className="w-unit-10xl max-h-unit-8xl" isStriped color="primary" selectionMode="single" >
        <TableHeader >
          <TableColumn className="text-xl">Article</TableColumn>
          <TableColumn className="text-xl" >Sentiment</TableColumn>
          {/* <TableColumn className="text-xl">View</TableColumn> */}
        </TableHeader>
        <TableBody>
        {news.map((item,index)=>(
          <TableRow onClick={()=>{handleClick(item.url)}} key={item.index}>
          <TableCell>{item.title}</TableCell>
          <TableCell>{item.result.split(': ')[1]}</TableCell>
          {/* <TableCell>Active</TableCell> */}
          </TableRow>
        ))}
        </TableBody>
      </Table>
      </>
    )
}

export default ArticlesHome 