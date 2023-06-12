import axios from "axios";
import { useState, useEffect } from "react"

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }

export function UpdateUser() {
    const [id, setId] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const handleClick = () => {
        console.log({ username: username, email: email })
        const data = { username: username, email: email };
        
        axios
            .put("http://localhost:5000/users/9/update", data)
            .then((response) => console.log(response.data))
            .catch((error) => console.log({ error }));
    }

    const handleClickAsysnc = async () => {
        console.log({ id: id, username: username, email: email })
        // const url = "http://localhost:5000/users/" + id + "/update"
        const url = `http://localhost:5000/users/${id}/update`
        console.log(url)
        const body = { 
            username: username, 
            email: email 
        };
        try {
            const response = await axios.put(url, body);
            console.log(response.data)
            setResult(response.data)
        } catch (error) {
            console.log({ error })

        }
    }

    return (
        <div>
            <h3>Update User</h3>
            <label htmlFor="">Which user you want to update place the user ID: </label>
            <input type="number" onChange={(event) => { setId(Number(event.target.value)) }} />
            {/* <p>{id}</p> */}
            <br />
            <label htmlFor="">User Name:</label>
            <input type="text" onChange={(event) => { setUserName(event.target.value) }} />
            <br />
            <label htmlFor="">Email Address:</label>
            <input type="text" onChange={(event) => { setEmail(event.target.value) }} />
            <br />
            <button onClick={handleClickAsysnc}>Update Data</button>
            <h5>Updated Result</h5>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    )
}