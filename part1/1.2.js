
const Header = (props) =>{
  console.log( ` Props from Header componente are: ${props}`)
  
  return (
      <div>
        <h1>The name of this course is {props.course}</h1>
      </div>

  )

}

const Content = ({ part1,part2, part3,exercises1, exercises2, exercises3  }) =>{

  return (
    <>
       <Part part={part1} exercise={exercises1}></Part>
       <Part part={part2} exercise={exercises2}></Part>
       <Part part={part3} exercise={exercises3}></Part>
    </>

)
}

const Part = (props) =>{
  
  console.log (` Props from Part componente are: ${props}`)
  return (
    <p>{props.part} {props.exercise}
    </p>

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
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}></Header>
      <Content 
      part1={part1}
      exercises1={exercises1}
      part2={part2}
      exercises2={exercises2}
      part3={part3}
      exercises3={exercises3}
      ></Content>
      <Total total={total}></Total>
    </div>
  )
}

export default App