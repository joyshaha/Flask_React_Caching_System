import { useState } from "react"

export function Demo() {
    // let counter = 0;
    // console.log("iam");

    const [counter, setCounter] = useState(0)
    const [currentText, setcurrentText] = useState("This will change")

    function HandleClick() {
        setCounter(counter + 1)
        console.log("i was clicked", counter);

    }

    const HandleChange = (event) => {
        setcurrentText(event.target.value);
        console.log("i was clicked");
    }

    return (
        <div>
            <h3>Onclick and OnChange</h3>
            <div>
                <p>{counter}</p>
                <button onClick={HandleClick}>Add One</button>
                {/* <button onClick={() => setCounter(counter + 1)}>Add One</button> */}
            </div>
            <br />
            <br />
            <div>
                <input type="text" onChange={HandleChange} />
                <p>{currentText}</p>
            </div>
        </div>
    )
}