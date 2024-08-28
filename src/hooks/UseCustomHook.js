import { useState, useEffect } from "react";

function UseCustomHook(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((result) => {
                setData(result)
            })
    }, [url])

    return [data];
}

export default UseCustomHook;