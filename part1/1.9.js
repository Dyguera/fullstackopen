import {useState} from "react"

const Feedback = ({name, state}) =>{
  return(
    <p>{name}:{state}</p>
  )

}

const Statistics = ({good, bad, neutral}) =>{
  let total = good + bad + neutral
  let average = (good - bad) / total
  let porcentagem = ((good / total) * 100)

  if(total === 0){
    return (
      <h2>No feedback given</h2>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>good:{good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
      <p>total:{total}</p>
      <p>average:{average}</p>
      <p>porcentagem:{porcentagem}</p>
    </div>

  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = ()=>{
    //const newGood = good  +1
    setGood(prev => prev + 1 )
  }

  const handleNeutral = ()=>{
    // const newNeutral = neutral +1 
    setNeutral(prev => prev +1)

  
  }

  const handleBad= ()=>{
    //const newBad = bad + 1
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