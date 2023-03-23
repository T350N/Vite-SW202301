import { FC } from "react";
import {Card} from "../components/cards"

export const Home:FC = () =>{
    return(
        <>
        
        <h1>Home</h1>
        <Card>
            <h2>This is a children Node</h2>
            <p>2021-03-21</p>
        </Card>
        <Card>
            <h2>This is a children Node1</h2>
            <p>2021-03-21</p>
        </Card>
        <Card>
            <h2>This is a children Node2</h2>
            <p>2021-03-21</p>
        </Card>
        <Card>
            <h2>This is a children Node3</h2>
            <p>2021-03-21</p>
        </Card>
        <Card>
            <h2>This is a children Node4</h2>
            <p>2021-03-21</p>
        </Card>
        </>
    );
}