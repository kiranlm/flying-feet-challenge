import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';
import {
  TextField,
  MaskedTextField,
} from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(Auth);
    Auth.setLoggedIn(true);
  };

  return (
    <div className="ms-Grid" dir="ltr">
      <h1>Login</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="ms-Grid-col ms-sm6">
            <MaskedTextField
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12">
            <PrimaryButton type="submit" text="Login" />
          </div>
          <div className="ms-Grid-col ms-sm12">
            <button class="googleBtn" type="button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="logo"
              />
              Login With Google
            </button>
            <span>{error}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
