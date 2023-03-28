import { useState, useEffect } from 'react';
import Counter from './components/Counter.js';
import CharacterList from './components/CharacterList.js';
import AuthContext from './contexts/authContext.js';

function App() {

  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: 'Petyr',
    age: 30,
    hobbies: ['1', '2', '3']
  });

  // ComponentDidMount -> initial render 
  useEffect(() => {
    setUser((oldState) => ({
      ...oldState,
      age: 31
    }));
    setUser((oldState) => ({
      ...oldState,
      hobbies: [...oldState.hobbies, '4']
    }));

  }, []);


  const restartCounter = () => {
    setCount(0);
  }

  return (
    <AuthContext.Provider value={{count, restartCounter }}>
      <div className="App" style={{ textAlign: 'center' }}>
        <h2>{!name ? 'Loading...' : name}</h2>

        {
          count <= 10
            ? <Counter />
            : null
        }
        <button onClick={() => setCount(x => x + 1)} >+</button>

        <CharacterList />

      </div>
    </AuthContext.Provider>
  );
}

export default App;
