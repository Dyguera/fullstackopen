
const Header = (props) =>{
  console.log( ` Props from Header componente are: ${props}`)
  
  return (
      <div>
        <h1>The name of this course is {props.course}</h1>
      </div>

  )

}

const Content = (props) =>{
  return (
    <>
      {props.parts.map((part, index)=>(
        <Part key={index} name={part.name} exercise={part.exercises}></Part>
      ))}

    </>

)
}

const Part = (props) =>{
  
  console.log (` Props from Part componente are: ${props}`)
  return (
    <p>{props.name} {props.exercise}
    </p>

  )
}

const Total = (props) => {
   const totalExercise = props.parts.reduce ((sum, part)=>(sum + part.exercises),0)
  return (
    <>
    <p> Number of exercises {totalExercise}</p>
    </>

)

}
const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App
