import { useState, useEffect } from "react"

// {
//     "email": "joy@gmail.com",
//     "id": 1,
//     "username": "joy"
//   }

export function CreateUser() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        console.log({ username: username, email: email })
        fetch('http://localhost:5000/users/create', {
            method: 'POST',
            body: JSON.stringify({ username: username, email: email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setResult(json)
                // throw new Error("this was an error")
            })
            .catch((error) => console.log({error}));
    }

    // const handleChange = (event) => {
    //     setUserId(event.target.value)
    // }

    return (
        <div>
            <h3>Create User</h3>
            <label htmlFor="">User Name:</label>
            <input type="text" onChange={(event) => { setUserName(event.target.value) }} />
            <br />
            <label htmlFor="">Email Address:</label>
            <input type="text" onChange={(event) => { setEmail(event.target.value) }} />
            <br />
            <button onClick={handleClick}>Post Data</button>
            <h5>Created Message</h5>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    )
}