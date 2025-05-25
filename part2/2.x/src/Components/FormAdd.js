import React from 'react'

const FormAdd = ({handleSubmit,newName, newNumber, setNewName, setNewNumber}) => {
  return (
    <form onSubmit={handleSubmit}>
        <h2>add a new one</h2>
        <div>
          Name:
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          Number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default FormAdd