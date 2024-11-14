import TicketNum from "./TicketNum"
import "./ticket.css"
export default function Ticket({ticket}){
    return (
        <div className="ticket">
            <h1>Ticket</h1>
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    )
}