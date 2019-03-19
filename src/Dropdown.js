import React from 'react';

const Dropdown = (props) => {
  const {handleClick, handleSelected, options, selected, isOpen} = props;

  const optionsFiltered = options
    .filter(item => item.id !== selected.id)
  
  
  optionsFiltered.unshift(selected)
  return (
    <div> 
      {isOpen ? optionsFiltered.map((option, index) => 
        <div
          key={option.id}
          className={"Dropdown__selector-items " 
          + ((option.details ? option.details : '')) + " " + (index === 0 ? "Dropdown-open": "")}
          onClick={() => handleSelected(option.id)}
        >
        {option.text}
        </div>) :
        <div 
          onClick={() => handleClick()}
          className="Dropdown__selector"
        >
        {selected.text}
        <span
          className={isOpen ? "" : "Dropdown-close"}
        ></span>
        </div>
      }
    </div>
  )
}

export default Dropdown;