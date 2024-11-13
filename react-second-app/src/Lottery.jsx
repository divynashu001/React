import { useState } from "react"
import './Lottery.css'
import { genTicket, sum} from "./helper"
export default function Lottery(){


    let[Ticket, setTicket]= useState(genTicket(3));
    let isWining = sum(Ticket) ===15;
    let buyTicket = ()=>{
        setTicket(genTicket(3))
    }
    return(
        <div>
            <h1>Lottery</h1>
            <div className="randomNo">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWining && "Congratuation, you won"}</h3>
            
        </div>
    )
}