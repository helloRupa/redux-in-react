import React from 'react';
import MenuItem from './MenuItem';

const selectCat = cat => ({
  type: 'SELECT_CAT',
  cat
});

const dispatchSelectCat = cat => {
  window.store.dispatch(selectCat(cat));
};

function Menu() {
  console.log('render Menu');
  const cats = window.store.getState().cats;

  return (
    <nav>
      <h2>Cat Menu</h2>
      { cats.map(cat => < MenuItem catName={cat} key={cat} selectCat={dispatchSelectCat} />) }
    </nav>
  )
}

export default Menu;
