import React from 'react';
import phoneServices from '../services/phoneServices';

const ContatcList = ({ persons, deleteFunction }) => {
  return (
    <div>
      <h2>Numbers</h2> {/* Movi o título para cá */}
      {persons.length > 0 ? (
        persons.map((person) => (
          <div key={person.id}>
            <div>Name: {person.name}</div>
            <div>Number: {person.number}</div>
            <button onClick={()=>deleteFunction(person.id) }>delete</button>
          </div>
        ))
      ) : (
        <p>No matching contacts</p>
      )}
    </div>
  );
};

export default ContatcList;