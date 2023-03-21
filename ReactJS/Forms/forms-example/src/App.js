import './App.css';

function App() {

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let { username, password } = Object.fromEntries(formData);

    console.log(username, ' => ', password);
  }

  return (
    <div className="App">
      <form method="POST">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
