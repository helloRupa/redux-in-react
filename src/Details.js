import React from 'react';

function Details() {
  console.log('render Details');

  return (
    <div>
      <h2>Cat Details</h2>
      <p>{ window.store.getState().selectedCat }</p>
    </div>
  )
}

export default Details;