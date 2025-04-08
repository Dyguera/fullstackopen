import {useState} from "react"

const StatisticsLine = ({name, value}) =>{
  return(
    <p>{name}:{value}</p>
  )

}

const StatisticTable = ({good, bad, neutral, total, average, porcentagem}) =>{

  return(
      <table>
      <tbody>
      <tr>
       <td>Good:</td> 
       <td>{good}:</td> 
      </tr>
      <tr>
       <td>Bad:</td> 
       <td>{bad}:</td> 
      </tr>
      <tr>
       <td>Neutral:</td> 
       <td>{neutral}:</td> 
      </tr>

      <tr>
       <td>total:</td> 
       <td>{total}:</td> 
      </tr>
      <tr>
       <td>average:</td> 
       <td>{average}:</td> 
      </tr>
      <tr>
       <td>porcentagem:</td> 
       <td>{porcentagem}:</td> 
      </tr>
      </tbody>
      </table>
  )

}

const Statistics = ({good, bad, neutral}) =>{
  let total = good + bad + neutral
  const average = total > 0 ? (good - bad) / total : 0;
  const porcentagem = total > 0 ? (good / total) * 100 : 0;

  if (total === 0){
    return (
      <h2>No feedback given</h2>
    )
  }
  return (
    <>
      <h2>Statistics</h2>
      <StatisticTable good={good} bad={bad} neutral={neutral} average={average}
      porcentagem ={porcentagem} total={total}
      ></StatisticTable>
    </>

  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = ()=>{
    setGood(prev => prev + 1 )
  }
  const handleNeutral = ()=>{
    setNeutral(prev => prev +1)

  
  }
  const handleBad= ()=>{
    setBad((prev => prev +1))

  }

  return (
    <>
    <h1>give feedback</h1>
    <button onClick={handleGood}>good</button>
    <button onClick={handleNeutral}> neutral</button>
    <button onClick={handleBad}>bad</button>
    <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </>
  )
}


export default App