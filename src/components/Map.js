import React from 'react'
const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

const Map = () => {
    return (
        <div>
            {names.map((name,i) => (
                <li key={i}>
                {name}
                </li>
            ))}
        </div>
    )
}

export default Map
