import React from 'react';

const Dropdown = (props) => {
  const {handleClick, handleSelected, options, selected, isOpen} = props;

  return (
    <div> 
      {isOpen ? options.map(option => 
        <div
        key={option.id}
        className="Dropdown__selector-items"
        onClick={() => handleSelected(option.id)}
        >
        {option.text}
        </div>) :
        <div 
        onClick={() => handleClick()}
        className="Dropdown__selector"
        >
        {selected.text}
        </div>
      }
    </div>
  )
}

export default Dropdown;