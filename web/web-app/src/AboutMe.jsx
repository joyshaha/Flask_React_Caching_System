import { useState } from 'react'

export function AboutMe() {
    const [data, setData] = useState(null)
    return (
        <div>
            <h3>About Me</h3>
            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    )
}


export function Education() {
    const [data, setData] = useState("Bsc in EEE")
    return (
        <div>
            <h3>Education</h3>
            <p>{data}</p>
        </div>
    )
}


export function ProfessionalExp() {
    const [data, setData] = useState("Software Engineer")
    return (
        <div>
            <h3>Professional Experience</h3>
            <p>{data}</p>
        </div>
    )
}