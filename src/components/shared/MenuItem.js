import React from 'react';

function MenuItem({ name, select }) {

  console.log('render MenuItem');
  
  const handleClick = e => {
    select(e.target.textContent);
  };

  return (
    <div onClick={ handleClick }>{name}</div>
  )
}

export default MenuItem;