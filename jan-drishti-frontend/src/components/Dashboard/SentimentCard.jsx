import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

function SentimentCard(){
    return(
        <Card className="flex flex-col items-center text-center justify-center bg-primary w-unit-6xl">
            <CardHeader>Sentiment Breakdown</CardHeader>
            <CardBody>
                <h1 className="text-7xl font-semibold text-center">107</h1>
            </CardBody>
        </Card>
    )
}

export default SentimentCard