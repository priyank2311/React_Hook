import axios from 'axios'
import React, { useState, useEffect } from 'react'

function EffectFetch() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idButton, setIdButton] = useState(1)

    const handleClick = () => {
        setIdButton(id)
    }

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[idButton])
    return (
        <div>
            <input type='text' value={id} onChange={e=> setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Data</button>
            <div>{post.title}</div>
            {/*<ul>
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>*/}
        </div>
    )
}

export default EffectFetch;
