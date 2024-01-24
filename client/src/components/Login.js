import { useEffect } from 'react'
import { userServices} from '../services/userServices'

function Login() {
    useEffect(() => {
      userServices.getUsers().then(
          response => console.log(response)
        )
    },)
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <>
          <label htmlFor="username">Username (or) Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          ></input>
        </>
        <>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          ></input>
        </>

        <button type="submit">Login</button>
        <span style={{margin: 5}}>(or)</span>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default Login;
