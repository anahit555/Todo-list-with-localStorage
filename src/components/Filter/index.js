import React from 'react';

import './styles.scss';

function Filter({ items, onChange }) {
  return (
    <div>
      <select onChange={onChange} className="select">
        {items.map((item, index) => (
          <option key={index} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;