import React from 'react';

function MenuItem({ peacockName, selectPeacock }) {

  console.log('render MenuItem');
  
  const handleClick = e => {
    selectPeacock(e.target.textContent);
  };

  return (
    <div onClick={ handleClick }>{peacockName}</div>
  )
}

export default MenuItem;