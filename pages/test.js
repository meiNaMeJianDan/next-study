import React, { useState, useEffect } from "react"

const Test = () => {
    const [a, seta] = useState(1)
    useEffect(() => {
        seta(2)
    }, [])
    return (<div>{a}</div>)
}
export default Test