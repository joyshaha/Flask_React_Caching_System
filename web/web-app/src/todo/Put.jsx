import axios from "axios";
import { useState, useEffect } from "react"

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }

export function UpdateTodo() {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const handleClick = () => {
        console.log({ userId: userId, title: title, completed: completed })
        const data = {
            id: 1,
            userId: userId,
            title: title,
            completed: completed,
        };
        axios
            .put("https://jsonplaceholder.typicode.com/todos/1", data)
            .then((response) => console.log(response.data))
            .catch((error) => console.log({ error }));
    }


    const handleClickAsysnc = async () => {
        console.log({ userId: userId, title: title, completed: completed })
        const body = {
            id: 1,
            userId: userId,
            title: title,
            completed: completed,
        };
        try {
            const response = await axios.put("https://jsonplaceholder.typicode.com/todos/1", body);
            console.log(response.data)
            setResult(response.data)
        } catch (error) {
            console.log({ error })

        }
    }

    return (
        <div>
            <h3>Update ToDo</h3>
            <label htmlFor="">userId:</label>
            <input type="number" onChange={(event) => { setUserId(Number(event.target.value)) }} />
            <br />
            <label htmlFor="">Title:</label>
            <input type="text" onChange={(event) => { setTitle(event.target.value) }} />
            <br />
            <label htmlFor="">Completed:</label>
            <input type="checkbox" onChange={() => { setCompleted(!completed) }} />
            <br />
            <button onClick={handleClickAsysnc}>Update Data</button>
            <h4>Updated Result</h4>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    )
}