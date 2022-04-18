import React, { useState } from 'react'

const Heading = (props) => <h1>{props.text}</h1>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.classification}</td>
      <td>{props.result}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral
  const avgTotal = props.good - props.bad
  const avg = avgTotal/total
  const positive = 100*props.good/total
  if (total < 1) {
    return <p>No feedback yet</p>
  }
  return (
     <div><Heading text="Statistics"/>
     <table>
    <StatisticLine classification="bad" result={props.bad} />
    <StatisticLine classification="neutral" result={props.neutral} />
    <StatisticLine classification="good" result={props.good} />
    <StatisticLine classification="total" result= {total} />
    <StatisticLine classification="average" result={avg} />
    <StatisticLine classification="positive" result={positive + "%"} />
     </table>
     </div>
  )
};


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const clickGood = () => {setGood(good + 1)}
  const clickBad = () => {setBad(bad + 1)}
  const clickNeutral = () => {setNeutral(neutral + 1)}
  
  return (
    <div>
      <h1>give feedback</h1>
        <div> 
          <button onClick={clickBad}>bad</button>
          <button onClick={clickNeutral}>neutral</button>
          <button onClick={clickGood}>good</button>
        </div>
        <Statistics good={good} bad={bad} neutral={neutral}/>
       </div>
  )
}







export default App