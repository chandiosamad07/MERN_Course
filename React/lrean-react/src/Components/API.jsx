import React, { useEffect, useState } from 'react'

const API = () => {
    const [posts , setPosts] =useState([])

    useEffect(()=>{

        const FetchPost = async ()=>{
            try{
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let result = await response.json()
            setPosts(result)
            console.log(result)
            }
            catch{
                console.log("Api data not find")
            }
        }
        FetchPost()
    },[])

  return (
    <div> <div>
    {
        posts.map((post,index)=>(
            <div key={index}>
                <h1>{post.id}</h1>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
            </div>
        ))
    }
</div></div>
  )
}

export default API