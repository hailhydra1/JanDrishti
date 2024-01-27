import React, { useState, useContext } from 'react'
import { JanDrishtiContext } from "../../context/Context";
import {Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button} from "@nextui-org/react";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';

const Drop = () => {

  const [value, setValue]=useState("")
  const{setNews} = useContext(JanDrishtiContext)
  const navigate = useNavigate()

  const api_key = "62f83385e0304accba970b1a0ac64296"

  const handleKeyDown = async(key) => {
    console.log(key)
      try {
        const list= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${key}&apiKey=${api_key}`); 
        setNews(list.data.articles);
        console.log(list.data);
        navigate("/dropresults");
      } catch (error) {
        console.log(error);
      }
    
  };

  return (
    <Dropdown>
    <DropdownTrigger>
      <Button variant="bordered">Categories</Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Link Actions">
      <DropdownItem key="business"  onClick={() => handleKeyDown('business')} >
        Business
      </DropdownItem>
      <DropdownItem key="entertainment"  onClick={() => handleKeyDown('entertainment')} >
        Entertainment
      </DropdownItem>
      <DropdownItem key="general"  onClick={() => handleKeyDown('general')} >
        General
      </DropdownItem>
      <DropdownItem key="health"  onClick={() => handleKeyDown('health')} >
        Health
      </DropdownItem>
      <DropdownItem key="science"  onClick={() => handleKeyDown('science')} >
        Science
      </DropdownItem>
      <DropdownItem key="sports"  onClick={() => handleKeyDown('sports')} >
        Sports
      </DropdownItem>
      <DropdownItem key="sports"  onClick={() => handleKeyDown('technology')} >
        Technology
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}

export default Drop