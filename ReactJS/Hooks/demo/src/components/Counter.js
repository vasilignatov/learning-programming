import { useEffect } from 'react';

const Counter = ({ count }) => {

// Component Did Update 
   useEffect(() => {
      console.log('Component did mount');

      return () => {
         console.log('Unmont');
      }
       
   }, []);
   return (
      <h3>{count}</h3>
   )
}

export default Counter;