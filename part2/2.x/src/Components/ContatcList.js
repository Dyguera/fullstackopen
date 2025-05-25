import React from 'react';

const ContatcList = ({ filteredPersons }) => {
  return (
    <div>
      <h2>Numbers</h2> {/* Movi o título para cá */}
      {filteredPersons && filteredPersons.length > 0 ? (
        filteredPersons.map((person) => (
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