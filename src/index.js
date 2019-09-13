import React from 'react';
import ReactDOM from 'react-dom';

const useToggle = () => {
  const [on, setOn] = React.useState(false);

  const toggle = () => setOn(prevOn => !prevOn);

  return [on, toggle];
};

const Switch = () => {
  const [on, toggle] = useToggle();
  return (
    <div>
      {on ? 'On' : 'Off'}
      <div>
        <button onClick={toggle}>Toggle</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Switch />, rootElement);
