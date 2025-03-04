
const Header = (props) =>{
  console.log( ` Props from Header componente are: ${props}`)
  
  return (
      <div>
        <h1>The name of this course is {props.course}</h1>
      </div>

  )

}

const Content = (props) =>{
console.log( ` Props from Content componente are: ${props}`)
  return (
    <>
    <p>{props.part} {props.exercise}</p>
    </>

)
}

const Total = (props) => {
  console.log( ` Props from Total componente are: ${props}`)
  return (
    <>
    <p> Number of exercises {props.total}</p>
    </>

)

}
const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack"
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}></Header>
      <Content part={part1} exercise={exercises1}></Content>
      <Content part={part2} exercise={exercises2}></Content>
      <Content part={part3} exercise={exercises3}></Content>
      <Total total = {totalExercises}></Total>
    </div>
  )
}

export default App