// App.js (VERSÃO AJUSTADA)
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { SearchFilter } from './Components/SearchFilter';
import FormAdd from './Components/FormAdd';
import ContactList from './Components/ContatcList'; // Importando o ContactList

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputFilter, setinputFilter] = useState('');

  const filteredPersons = inputFilter
    ? persons.filter(person =>
        person.name.toLowerCase().includes(inputFilter.toLowerCase()) // Use includes para correspondência parcial
      )
    : persons;


   useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response =>{
      console.log("poromise fulfield")
      setPersons(response.data)
    })
   }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newName.trim()) {
      setErrorMessage('Name cannot be empty');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (!newNumber.trim()) {
      setErrorMessage('Number cannot be empty');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const nameExists = persons.some((person) => person.name === newName);
    const numberExists = persons.some((person) => person.number === newNumber);

    if (nameExists) {
      setErrorMessage(`${newName} is already added to phonebook`);
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (numberExists) {
      setErrorMessage(`${newNumber} is already added to phonebook`);
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    axios.post('http://localhost:3001/persons', newPerson)
    .then(response =>{
      setPersons([...persons, response.data]);
      setNewName('');
      setNewNumber('');
      setErrorMessage('Contact added successfully!');
      setTimeout(() => setErrorMessage(''), 3000);
    })

  };

  const handleFilterChange = (e) => {
    setinputFilter(e.target.value);
   
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <SearchFilter
        inputFilter={inputFilter}
        handleFilterChange={handleFilterChange}
      />

      <FormAdd
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* ContactList agora é um componente separado */}
      <ContactList persons={filteredPersons} />
    </div>
  );
};

export default App;