import { useState } from "react"

export default function Comments(){
    let [formData, setFormData]= useState({
        username:"",
        remarks:"",
        rating:5
    })

    let handleinputChange = (event)=>{
        setFormData((currData)=>{
            return{...currData, [event.target.name]:event.target.value};
        })
    }

    let handeSubmit = (event)=>{
        console.log(formData)
        event.preventDefault();
        setFormData(
            {
                username:"",
                remarks:"",
                rating:5
            }
        )
    }
    return (
        <div>
            <h1>Give a comment</h1>
            <form onSubmit={handeSubmit}>

                <label htmlFor="username">Username: </label>
                <input 
                placeholder="Username" 
                type="text" 
                value={formData.username} 
                onChange={handleinputChange}
                id="username"
                name="username"
                />
                <br/><br/>

                <label htmlFor="remarks">Remark: </label>
                <textarea 
                value={formData.remarks} 
                placeholder="add few remarks" 
                onChange={handleinputChange}
                id="remarks"
                name="remarks"
                ></textarea>
                <br/><br/>

                <label htmlFor="rating">Rating: </label>
                <input 
                type="number"
                 min={1} 
                 max={5} 
                 value={formData.rating} 
                 onChange={handleinputChange}
                 id="rating"
                 name="rating"
                 />
                 
                <br/><br/>

                <button>Add Comment</button>
            </form>
        </div>
    )
}