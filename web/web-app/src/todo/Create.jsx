import { useState, useEffect } from "react"

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }

export function CreatePost() {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = () => {
        console.log({ userId: userId, title: title, completed: completed })
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ userId: userId, title: title, completed: completed }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                // throw new Error("this was an error")
            })
            .catch((error) => console.log({error}));
    }

    // const handleChange = (event) => {
    //     setUserId(event.target.value)
    // }

    return (
        <div>
            <h3>Create Post</h3>
            <label htmlFor="">userId:</label>
            <input type="number" onChange={(event) => { setUserId(Number(event.target.value)) }} />
            {/* <p>{userId}</p> */}
            <br />
            <label htmlFor="">Title:</label>
            <input type="text" onChange={(event) => { setTitle(event.target.value) }} />
            <br />
            <label htmlFor="">Completed:</label>
            <input type="checkbox" onChange={() => { setCompleted(!completed) }} />
            <br />
            <button onClick={handleClick}>Post Data</button>
        </div>
    )
}