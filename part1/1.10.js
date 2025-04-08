import {useState} from "react"

const StatisticsLine = ({name, value}) =>{
  return(
    <p>{name}:{value}</p>
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
    <div>
      <h2>Statistics</h2>
      {good > 0 && <StatisticsLine name="Good" value={good} />}
      {neutral > 0 && <StatisticsLine name="Neutral" value={neutral} />}
      {bad > 0 && <StatisticsLine name="Bad" value={bad} />}
      <StatisticsLine name="Total" value={total} />
      <StatisticsLine name="Average" value={average} />
      <StatisticsLine name="Positive" value={`${porcentagem}%`} />
    </div>

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
    <div>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
    </>
  )
}


export default App