import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  state = {
    on: false,
  };

  handleToggle = () => this.setState(prevState => ({ on: !prevState.on }));

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.handleToggle,
    });
  }
}

const Switch = () => (
  <Toggle
    render={({ on, toggle }) => (
      <div>
        {on ? 'On' : 'Off'}
        <div>
          <button onClick={toggle}>Toggle</button>
        </div>
      </div>
    )}
  />
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Switch />, rootElement);
