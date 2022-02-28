import React from 'react'
import classes from './MySelect.module.css'

const MySelect = ({options, value, onChange}) => {
  return (
    <div>
        <select
            className = {classes.mySelect}
            value={value}
            onChange = {event => onChange(event.target.value)}
        >
            {options.map(option => 
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    </div>
  )
}

export default MySelect