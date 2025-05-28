// App.js (VERSÃO AJUSTADA)
import React, { useState, useEffect } from 'react';
import { SearchFilter } from './Components/SearchFilter';
import FormAdd from './Components/FormAdd';
import ContactList from './Components/ContatcList'; // Importando o ContactList
import phoneServices from './services/phoneServices';

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
    phoneServices
    .getAll()
    .then(initialNotes =>{
      console.log("poromise fulfield")
      setPersons(initialNotes)
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

    const nameExists = persons.find((person) => person.name === newName);
    const numberExists = persons.some((person) => person.number === newNumber);

    if (nameExists) {
      if (window.confirm(`Update ${nameExists.name}?`)) {
      const updatedPersonObject = { ...nameExists, number: newNumber };
      phoneServices
      .update(nameExists.id,updatedPersonObject )
      .then(
        setPersons(persons.map(person =>
        person.id === nameExists.id ? updatedPersonObject : person
      )))
      return;
    }}

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

    phoneServices
    .create(newPerson)
    .then(newPhone =>{
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
      setErrorMessage('Contact added successfully!');
      setTimeout(() => setErrorMessage(''), 3000);
    })

  };

  const handleFilterChange = (e) => {
    setinputFilter(e.target.value);
   
  };

    const handleDeleteButton = (id) =>{ 
     const personToDelete = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      phoneServices
      .deletePhone(id)
      .then((response)=>{ 
        console.log(response)
        setPersons(persons.filter(person => person.id !== id))
        setErrorMessage('Contact deleted successfully!');
        setTimeout(() => setErrorMessage(''), 3000);
      })
      .catch(error =>{
         console.error("Error deleting person:", error);
      })
    }}

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
      <ContactList persons={filteredPersons} deleteFunction={handleDeleteButton} />
    </div>
  );
};

export default App;