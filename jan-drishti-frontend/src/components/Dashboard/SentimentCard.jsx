import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from 'react'

function SentimentCard({Title,Count,ColorVariant}){

    return(
        <Card className={`flex flex-col items-center text-center justify-center bg-${ColorVariant} w-unit-6xl`}>
            <CardHeader>{Title}</CardHeader>
            <CardBody>
                <h1 className="text-7xl font-semibold text-center">{Count}</h1>
                <p>Articles</p>
            </CardBody>
        </Card>
    )
}

export default SentimentCard