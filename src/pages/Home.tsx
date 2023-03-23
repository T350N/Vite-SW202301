import { FC } from "react";
import { Card } from "../components/cards";
export const Home:FC = () =>{
    return(
        <>
        
        <h1>Home</h1>
        <Card>
            <h2>This is a children Node</h2>
            <p>2021-03-21</p>
        </Card>
        </>
    );
}