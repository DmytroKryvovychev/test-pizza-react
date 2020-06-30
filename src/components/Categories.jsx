import React from 'react';

function Categories({ items, onClick }) {
  const [state, setstate] = React.useState(null);

  const onSelectItem = (index) => {
    setstate(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={state === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={state === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
