import axios from "axios";
import { useState } from "react"

export function DeleteUser() {
    const [userId, setUserId] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);


    const handleClickAsysnc = async () => {
        console.log({ userId: userId })
        const url = `http://localhost:5000/users/${userId}/delete`
        console.log(url)
        try {
            const response = await axios.delete(url);
            console.log(response.data)
            setResult(response.data)
        } catch (error) {
            console.log({ error })

        }
    }

    return (
        <div>
            <h3>Delete User</h3>
            <label htmlFor="">Which user you want to delete place the user ID: </label>
            <input type="number" onChange={(event) => { setUserId(Number(event.target.value)) }} />
            <br />
            <button onClick={handleClickAsysnc}>Delete User</button>
            <h5>Deleted Message</h5>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    )
}