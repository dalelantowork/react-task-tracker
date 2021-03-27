import React from 'react'
const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];

const FilterArrayObjectsValue = () => {
    return (
        <div>
            <div>
            {people.filter(person => person.age < 60).map((filteredPerson, i) => (
                <li key={i}> 
                {filteredPerson.name}
                </li>
            ))}
            </div>
        </div>
    )
}

export default FilterArrayObjectsValue
