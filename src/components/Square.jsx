import React from 'react';



// class Square extends Component {
    
//         state ={
//             value: null,
//         };
    
//     render() {
//       return (
        
//       );
//     }
//   }
 
// export default Square;

const Square = (props) => {
    return ( 
      
            
        <button className="square" 
        onClick={props.onClick}>
        {props.value}
      </button>
     );
}
 
export default Square
;


