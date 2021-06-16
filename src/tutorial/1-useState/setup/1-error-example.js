import React from 'react';

const ErrorExample = () => {
  let title = 'random title'

  const handleClick = () => {
    title = 'new title'
  }

  return (
    <div>
       <h2>{title}</h2>
       <button className="btn" onClick={handleClick}>Change Title</button>
    </div>
    );
};

export default ErrorExample;
