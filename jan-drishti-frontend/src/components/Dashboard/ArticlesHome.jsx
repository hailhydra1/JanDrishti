<<<<<<< Updated upstream
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

function ArticlesHome(){
    return(
        <Table className="w-unit-9xl" isStriped color="primary" selectionMode="single" >
=======
import react, {useState, useEffect, useContext} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import { JanDrishtiContext } from "../../context/Context";
import axios from "axios"


function ArticlesHome(){

  const{news,setNews} = useContext(JanDrishtiContext)

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

        
        <Table className="w-unit-9xl max-h-unit-5xl" isStriped color="primary" selectionMode="single" >
>>>>>>> Stashed changes
        <TableHeader >
          <TableColumn className="text-xl">Article</TableColumn>
          <TableColumn className="text-xl" >Sentiment</TableColumn>
          {/* <TableColumn className="text-xl">View</TableColumn> */}
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Article 1</TableCell>
            <TableCell>Positive</TableCell>
            {/* <TableCell>Active</TableCell> */}
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Negative</TableCell>
            {/* <TableCell>Paused</TableCell> */}
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Negative</TableCell>
            {/* <TableCell>Active</TableCell> */}
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            {/* <TableCell>Vacation</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    )
}

export default ArticlesHome 