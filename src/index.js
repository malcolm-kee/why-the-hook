import React from 'react';
import ReactDOM from 'react-dom';

class Switch extends React.Component {
  state = {
    on: false,
  };

  handleToggle = () => this.setState(prevState => ({ on: !prevState.on }));

  render() {
    return (
      <div>
        {this.state.on ? 'On' : 'Off'}
        <div>
          <button onClick={this.handleToggle}>Toggle</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Switch />, rootElement);
