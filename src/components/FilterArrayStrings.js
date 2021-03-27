import React from 'react'
const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

const FilterArrayStrings = () => {
    return (
        <div>
            {names.filter(name => name.includes('J')).map((filteredName, i) => (
            <li key={i}>
                {filteredName}
            </li>
            ))}
        </div>
    )
}

export default FilterArrayStrings
