import { useEffect, useContext } from 'react';
import AuthContext from '../contexts/authContext';

const Counter = () => {

   const { count, restartCounter } = useContext(AuthContext);
   // Component Did Update 
   useEffect(() => {
      console.log('Component did mount');

      return () => {
         restartCounter();
         console.log('Unmont');
      }

   }, []);

   return (
      <h3>{count}</h3>
   )
}

export default Counter;