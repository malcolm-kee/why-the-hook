import React from 'react';
import ReactDOM from 'react-dom';

const Switch = () => {
  const [on, setOn] = React.useState(false);
  return (
    <div>
      {on ? 'On' : 'Off'}
      <div>
        <button onClick={() => setOn(prevOn => !prevOn)}>Toggle</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Switch />, rootElement);
