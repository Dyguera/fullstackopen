/*import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const teste = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState(''); 
    const [newNumber, setnewNumber] = useState(''); 
    const [errorMessage, setErrormessage] = useState('');  
    const [inputFilter, setInputFilter] = useState('');
    const [filterPerson, setFilterPerson] = useState(''); 

    useEffect(()=>{
        axios.get('http://localhost:3001/persons')
        .then(reponse => {
            setPersons(Response.data)
        })
    }, [])

    const handleSubmit = (e)=>{ 
        e.preventDefault()

        if(!newName.trim()) { 
            setErrormessage('Name Cannoit be empty')
            setTimeout(()=>setErrormessage(''), 3000)
        }

        if(!newNumber.trim()) {
            setErrormessage('Number Cannoit be empty')
            setTimeout(()=>setErrormessage(''), 3000)
        }

        const nameExist = persons.some((person) => person.name === newName)
        const numberExist = persons.some((person) => person.number === newNumber) 

        if(nameExist) { 
            setErrormessage(`${newName} is already added to phonebook`)
            setTimeout(() => setErrormessage(''), 3000);
        }

        if (numberExist){
            setErrormessage(`${newNumber} is already added to phonebook`)
            setTimeout(()=> setErrormessage(""), 3000)

        }

        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.lenght +1
        }

        axios.post('http://localhost:3001/persons', newPerson)
        .then(response => { 
        setPersons([...persons, response.data]);
        setNewName("");
        setnewNumber("");    
        })
        
        setFilterPerson([...persons, newPerson]);
        
    }

    const hanldeFilerChange = (e) => {
        setInputFilter(e.target.value)
        const filtered = persons.filter(person => person.name.toLowerCase().startsWith(e.target.value.toLowerCase()))
        setFilterPerson(filtered)

    }
  return (
    <div>
        <h2>PhoneBook</h2>
        <p>
            Filter show with
            <input 
                value={inputFilter}
                onChange={hanldeFilerChange}
            />
        </p>
        <form onSubmit={handleSubmit}>
            <h2>add a new one</h2>  
            <div>
                Name:
                <input value ={newName} onChange={(e)=>setNewName(e.target.value)}/>
            </div>
            <div>
                Number
                <input value={newNumber} onChange={(e)=> setnewNumber(e.target.value)}/>
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
        {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>}

        <h2>Numbers</h2>
        {filterPerson.length > 0 ? (
            filterPerson.localeCompare((person) => (
                <div key={person.id}>
                    <p>Name: {person.name}</p>
                    <p> Number: {person.number}</p>
                </div>
            ))
        ): (
            <p> No Matching contracts</p>
        )}
    
    </div>
  )
}

export default teste */