// import React, { Component } from "react";
import React from 'react';
import Counter from "./counter";
// class Counters extends Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.onReset}
//           className="btn btn-primary btn-sm m-2"
//         >
//           Reset
//         </button>
//         {this.props.counters.map(counter => (
//           <Counter
//             key={counter.id}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

const Counters = ({onReset, counters, onDelete, onIncrement}) => {
  console.log('Counters - Rendered');
  return ( 
    <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
   );
}

export default Counters;
