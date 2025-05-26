import React from 'react';

const ContatcList = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2> {/* Movi o título para cá */}
      {persons.length > 0 ? (
        persons.map((person) => (
          <div key={person.id}>
            <p>Name: {person.name}</p>
            <p>Number: {person.number}</p>
          </div>
        ))
      ) : (
        <p>No matching contacts</p>
      )}
    </div>
  );
};

export default ContatcList;