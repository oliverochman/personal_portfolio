import React from 'react';
import Confetti from 'react-confetti'

const Sprinkler = () => {
    return (
      <Confetti
        width = {2000} 
        height={1000}
        colors={['grey', 'black', 'darkred']}
      />
    )
  }

  export default Sprinkler;