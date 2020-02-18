import React from "react";
// import Sprinkler from "./sprinkler";
// import Sprinkler from '/src/sprinkler.jsx'
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
// const Hello = () => {
//   return ( 
//     <div className="ui main container">
//       <h1 id="hello">Hello Worldz</h1>
//     </div>
//   );
// };
// export default Hello;