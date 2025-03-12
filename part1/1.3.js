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
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = {
    name: 'Fundamentos da biblioteca React',
    exercises: 10
  }
  const part2 = {
    name: 'Usando props para passar dados',
    exercises: 7
  }
  const part3 = {
    name: 'Estado de um componente',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content 
      part1={part1.name}
      exercises1={part1.exercises}
      part2={part2.name}
      exercises2={part2.exercises}
      part3={part3.name}
      exercises3={part3.exercises}
      ></Content>
    </div>
  )
}

export default App
