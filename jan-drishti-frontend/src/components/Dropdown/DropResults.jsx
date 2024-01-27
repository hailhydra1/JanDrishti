import React, {useContext, useEffect} from 'react'
import { JanDrishtiContext } from "../../context/Context";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";

const SearchResults = () => {
    const{news,setNews} = useContext(JanDrishtiContext)
  return (
    <div>
        <Table className="w-unit-9xl max-h-unit-5xl" isStriped color="primary" selectionMode="single" >
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
    </div>
  )
}

export default SearchResults