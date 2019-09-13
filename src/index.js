import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

// class Switch extends React.Component {
//   state = {
//     on: false,
//   };

//   handleToggle = () => this.setState(prevState => ({ on: !prevState.on }));

//   render() {
//     return (
//       <div>
//         {this.state.on ? 'On' : 'Off'}
//         <div>
//           <button onClick={this.handleToggle}>Toggle</button>
//         </div>
//       </div>
//     );
//   }
// }
const Switch = createReactClass({
  getInitialState: function() {
    return {
      on: false,
    };
  },
  handleToggle: function() {
    this.setState(prevState => ({ on: !prevState.on }));
  },
  render: function() {
    return (
      <div>
        {this.state.on ? 'On' : 'Off'}
        <div>
          <button onClick={this.handleToggle}>Toggle</button>
        </div>
      </div>
    );
  },
});

const rootElement = document.getElementById('root');
ReactDOM.render(<Switch />, rootElement);
