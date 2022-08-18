import './App.css';
import FormInput from './components/FormInput';
import { useState } from 'react';

function App() {
  const [username, setusername] = useState('');
  console.log(username);

  const handleChange = (e) => {
    setusername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const errorMessage =  () => {

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="CarHolderName"
          placeholder="Name"
          setusername={setusername}
          handleChange={handleChange}
          errorMessage="enter number"
        />
        <FormInput
          label="CardHolder Number"
          placeholder="Email"
          errorMessage="number enter"
        />
        <FormInput placeholder="Password" errorMessage=" enter password" />
        <button type="submit">Confirm</button>
      </form>
      {/* <Card/> */}
    </div>
  );
}

export default App;
