

import {useState} from "react"

const App = ()=> {
  const [cliente, setCliente] = useState ({
    nome: "Rodrigo",
    sobrenome:"Cruz"

  })

  const [compradores, setCompradores] = useState([{nome:"Rodrigo", sobrenome: "Cruz"}])

  const changeNamePri = ()=>{
    setCliente({...cliente, nome :"Priscila"})
  }

  const changeNameRod = ()=>{
    setCliente({...cliente, nome :"Rodrigo" } )
  }

  const changeCompradores = () => {
    let novosCompradores = [...compradores]

   novosCompradores.map((comprador)=>(comprador.nome = "teste"))
      
    
    setCompradores(novosCompradores) 
  }
  
  // const novosCompradores = compradores.map(comprador => ({
    // ...comprador,
    //   nome: "Priscila"
 // }))

  return(
    
    <>
    <div > {cliente.nome} {cliente.sobrenome}</div>
    <button onClick={changeNameRod}>Rodrigo</button>
    <button onClick={changeCompradores}>Priscila</button>
    <div>Segue a lista de compradores
     {compradores.map((comprador, index)=>( 
      <div key={index}>
       {comprador.nome}, {comprador.sobrenome}
      </div>))}
    </div>
    </> 
  )
}


export default App