import React, {useContext, useEffect} from 'react'
import { JanDrishtiContext } from "../../context/Context";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";

const ArticleSearch = () => {
    const{news} = useContext(JanDrishtiContext)

  return (
    <div>
        <Table className="w-unit-10xl max-h-unit-9xl" isStriped color="primary" selectionMode="single" >
        <TableHeader >
          <TableColumn className="text-xl">Article</TableColumn>
          <TableColumn className="text-xl" >Description</TableColumn>
          {/* <TableColumn className="text-xl">View</TableColumn> */}
        </TableHeader>
        <TableBody>
        {news.map((item,index)=>(
          <TableRow key={item.index}>
          <TableCell>{item.title}</TableCell>
          <TableCell>{item.description}</TableCell>
          {/* <TableCell>Active</TableCell> */}
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ArticleSearch