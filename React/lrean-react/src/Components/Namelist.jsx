import React from 'react'

 const Namelist = () => {


    const names = ["Abdullah","Abdul","Samad","Imran","Ali"]
    const persons = [
        {
          name: "Alice",
          age: 28,
          skill: "ReactJS"
        },
        {
          name: "Bob",
          age: 32,
          skill: "NodeJS"
        },
        {
          name: "Charlie",
          age: 25,
          skill: "Python"
        },
        {
          name: "Diana",
          age: 30,
          skill: "Machine Learning"
        },
        {
          name: "Eve",
          age: 35,
          skill: "Data Analysis"
        }
      ];
      
  return (
    <div>
        <div>
            {
                persons.map((person,index)=>(
                    <div key={index}>
                        <h1>{person.name}</h1>
                        <h3>{person.age}</h3>
                        <h3>{person.skill}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Namelist