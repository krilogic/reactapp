import React, { useEffect } from "react";
import axios from 'axios'


export default function DropDownAPI() {
    const [items, SetItems] = React.useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                console.log(result.data, "res")
                SetItems(result.data)
            })
            .catch(
                err => {
                    console.log(err)
                })
    }, []);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <select>
                {
                    items.map((item) => (<option value={item.id}>{item.title}</option>))
                }
            </select>
        </div>
    )
};

