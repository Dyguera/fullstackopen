import {useState} from "react"

const Feedback = ({name, state}) =>{
  return(
    <p>{name}:{state}</p>
  )

}

const TotalFeedbacks = ({total}) =>{
  console.log({total})

   return (
    <p>
    all: {total}
    </p>
   )

}

const Average = ({average})=>{
  return (
    <div>
      Average : {average}
    </div>
  )
}

const Porcentagem = ({porcentagem})=>{
  return (
    <div>Porcentagem: {porcentagem}</div>
  )
}


const App = () => {
  const [total, setTotal] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [porcentagem, setPorcentagem] = useState(0)

  const handleGood = ()=>{
    const newGood = good  +1
    const newTotal = total + 1
    setGood(newGood )
    setTotal(newTotal)
    handleAvarage(newGood, bad, newTotal)
    setPorcentagem ((newGood / newTotal ) * 100)
  }

  const handleNeutral = ()=>{
    const newNeutral = neutral +1 
    const newTotal = total + 1
    setNeutral(newNeutral)
    setTotal(newTotal)
    handleAvarage(good, bad, newTotal)
    setPorcentagem((good / newTotal ) * 100)
  
  }

  const handleBad= ()=>{
    const newBad = bad + 1
    const newTotal = total + 1

    setBad(newBad)
    setTotal(newTotal)
    handleAvarage(good, newBad, newTotal)
    setPorcentagem((good / newTotal ) * 100)
  
  }

  const handleAvarage = (currentGood, currentBad, currentTotal)=>{
    if (total === 0 ){setAverage(0)} 
    else {
      setAverage((currentGood - currentBad ) / currentTotal)
    }

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
      <TotalFeedbacks total={total}></TotalFeedbacks>
      <Average average={average}></Average>
      <Porcentagem porcentagem={porcentagem}></Porcentagem>
    </div>
    </>
  )
}


export default App