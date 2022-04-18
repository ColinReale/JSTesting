import React from 'react'

const Part = (props) => {
  return(
    <p>{props.part} {props.total}</p>
  )
};

const Content = () => {
  return(
    <div>
      <Part part={part1} total={exercises1}/>
       <Part part={part2} total={exercises2}/>
        <Part part={part3} total={exercises3}/>
    </div>
  )
}

const Total = () => {
  return <p>Number of Exercises {exercises1 + exercises2 + exercises3}</p>
}

const Hello = (props) => {  
  return (    
  <div>      
    <p>Hello {props.name}, you are {props.age} years old</p>    
    </div>  
    )
  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
  // const parts is essentially an array of objects
    parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  
]
  }
    return (
    <div>
       <h1>{course}</h1>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App