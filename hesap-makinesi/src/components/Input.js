import React from 'react'
import'./Input.css'

function Input({ text, result}) {
    return (
        <div className='input-wrapper'>
            <div className='text'>
                <h3>{text}</h3>
            </div>
            <div className='result'>
                <h1>={result}</h1>
            </div>
        </div>
    )
}

export default Input