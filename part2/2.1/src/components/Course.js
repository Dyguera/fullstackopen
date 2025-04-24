const Course = (props) => {

    return (
      <>
  
        <Header name={props.name}></Header>
        <Content course={props.course}></Content>
        <Total count={props.course}></Total>
        </>
    )
  }
  
  const Header = (props) =>{
    
    return (
        <div>
          <h1>The name of this course is {props.name}</h1>
        </div>
  
    )
  
  }
  
  const Content = (props) =>{
    return (
      <>
        {props.course.parts.map((part, index)=>(
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
     const totalExercise = props.count.parts.reduce ((sum, part)=>(sum + part.exercises),0)
    return (
  
      <p> Number of exercises {totalExercise}</p>
  
  
  )
  
  }

export default Course