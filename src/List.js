import React from 'react';

const List = ({id, name, age, image, removeItem}) => {
  return (
    <>
      <div key={id} className='person'>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <h4>{age}</h4>
        </div>
        <button className="btn" onClick={() => removeItem(id)}>Remove</button>
      </div>
    </>
  );
};

export default List;
