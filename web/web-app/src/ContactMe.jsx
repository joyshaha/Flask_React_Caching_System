import { useState } from 'react'

export function ContactMe() {

    const [data, setData] = useState("")
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)

    function HandleClick() {
        setData("hello")
        console.log("i was clicked", data);
    }

    function HandleNameChange(event) {
        setName(event.target.value);
        console.log(name);
    }

    const HandleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }

    return (
        <div>
            <h3>Contact Me</h3>
            <form action="">
                <label htmlFor="">Your Name: </label>
                <input type="text" onChange={HandleNameChange}/>
                <br />
                <label htmlFor="">Your Email: </label>
                <input type="text" onChange={HandleEmailChange}/>
                <br />
                <p>Answer: {data}</p>
                <button onClick={HandleClick}>Submit</button>
                
            </form>
        </div>
    )
}