import { useState, useEffect } from "react"

export function GetTodos() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=1  ")
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
                <h1>Get ToDo List with Limit</h1>
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