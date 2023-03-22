import './App.css';
import { useState, useEffect, useRef } from 'react';
import HobbyList from './components/HobbyList.js';

function App() {

  let [username, setUsername] = useState([]);
  let [services, setServices] = useState([]);
  let [isValid, setIsValid] = useState(false);
  const passRef = useRef();

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/services')
      .then(res => res.json())
      .then(data => setServices(Object.values(data)));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let { username, password, services, rememberme } = Object.fromEntries(formData);

    console.log(services);
    console.log(rememberme);
  }

  const onChange = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
    if (e.target.value.length <= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  const onServicesChange = (e) => {
    setUsername('');
    passRef.current.value = '';
  }

  return (
    <div className="App">
      <form method="POST" onSubmit={onSubmit}>

        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={onChange} value={username} />
          {isValid && <div style={{ color: 'red' }}>Invalid Input!</div>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passRef} />
        </div>

        <div>
          <label htmlFor="services">Services</label>

          <select name="services" id="services" onChange={onServicesChange}>
            {
              services.map(x => <option key={x._id} value={x._id} >{x.name}</option>)
            }
          </select>

        </div>

        <div>
          <label htmlFor="rememberme">remember me</label>
          <input type="checkbox" name="rememberme" defaultChecked />
        </div>


        <input type="submit" value="Login" />
      </form>

      <HobbyList>Hobby List !!!</HobbyList>
    </div>
  );
}

export default App;
