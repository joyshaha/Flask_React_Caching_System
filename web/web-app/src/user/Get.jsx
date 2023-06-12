import axios from "axios";
import { useState, useEffect } from "react"


export function GetUsers() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/users/get")
            .then((response) => response.json())
            // .then((data) => {
            //   console.log(data)
            //   return data
            // })
            .then((data) => setData(data));
    }, [])

    return (
        <div>
            <div>
                <h1>Get User List</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
                {/* {data &&
                    data.map(item => {
                        return (
                            <div key={item.id}>
                                <h3>Title: {item.title}</h3>
                                <p>Id: {item.id}</p>
                                <p>Status: {item.completed.toString()}</p>
                            </div>
                        )
                    })
                } */}
            </div>

        </div>
    )
}


export function GetUserList() {
    const [data, setData] = useState(null)

    const handleClickAsysnc = async () => {
        const url = `http://localhost:5000/users/get`
        console.log(url)
        try {
            const response = await axios.get(url);
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            console.log({ error })
        }
    }

    return (
        <div>
            <div>
                <h1>Get User List</h1>
                <button onClick={handleClickAsysnc}>Get Users Data</button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>

        </div>
    )
}