// App.js (VERSÃO AJUSTADA)
import React, { useState } from 'react';
import { SearchFilter } from './Components/SearchFilter';
import FormAdd from './Components/FormAdd';
import ContactList from './Components/ContatcList'; // Importando o ContactList

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputFilter, setinputFilter] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

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

    const updatedPersons = [...persons, newPerson];
    setPersons(updatedPersons);

    if (inputFilter) {
      const filtered = updatedPersons.filter(person =>
        person.name.toLowerCase().startsWith(inputFilter.toLowerCase())
      );
      setFilteredPersons(filtered);
    } else {
      setFilteredPersons(updatedPersons);
    }

    setNewName('');
    setNewNumber('');
  };

  const handleFilterChange = (e) => {
    setinputFilter(e.target.value);
    const filtered = persons.filter(person =>
      person.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setFilteredPersons(filtered);
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
      <ContactList filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;