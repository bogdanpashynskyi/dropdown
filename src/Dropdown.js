import React from 'react';

const Dropdown = (props) => {
  const {handleClick, handleSelected, options, selected, isOpen} = props;

  const itemsForSelection = options.filter(option => 
    option.id !== selected.id)

  return (
    <div> 
        <div 
        className="Dropdown__selector"
        onClick={() => handleClick()}
        >
        {selected.text}
        </div>

        {itemsForSelection.map(item => 
          <div
          key={item.id}
          onClick={() => handleSelected(item.id)}
          className={"Dropdown__selector-items " + (isOpen ? 'open' : 'closed')}
          >
          {item.text}
          </div>
        )}
    </div>
  )
}

export default Dropdown;