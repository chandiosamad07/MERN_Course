import React, { useEffect, useState } from 'react'

const APIC = () => {
    const [posts , setPosts] =useState([])

    useEffect(()=>{

        const FetchPost = async ()=>{
            try{
            let response = await fetch('http://localhost:5000/Getdata')
            let result = await response.json()
            console.log(result)
            setPosts(result)
          
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
                <h3>{post.name}</h3>
                <h3>{post.Company}</h3>
            </div>
        ))
    }
</div></div>
  )
}

export default APIC