import React from "react";
import Confetti from 'react-confetti'

const Hello = () => {
    return ( 
      <div className="ui main container">
        <h1 id="hello">Hello World</h1>
      </div>
    );
};
const Sparks = () => {
    return ( 
      <Confetti
        width = {2000} 
        height={1000}
        colors={['grey', 'black', 'darkred']}
      />
    )
  }
export default Hello;
