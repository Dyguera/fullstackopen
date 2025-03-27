import {useState} from "react"

const Feedback = ({name, state}) =>{
  return(
    <p>{name}:{state}</p>
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
    setNeutral(prev => prev + 1 )
  }

  const handleBad= ()=>{
    setBad(prev => prev + 1 )
  }

  return (
    <>
    <h1>give feedback</h1>
    <button onClick={handleGood}>good</button>
    <button onClick={handleNeutral}> neutral</button>
    <button onClick={handleBad}>bad</button>
    <div>
      <h2>statistics</h2>
      <Feedback name='good' state={good}></Feedback>
      <Feedback name='neutral' state={neutral}></Feedback>
      <Feedback name='bad' state={bad}></Feedback>
   </div>
    </>
  )
}


export default App