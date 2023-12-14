import { Link } from 'react-router-dom'

function Login(){
    return(
      <div class="box">
      <img src="https://img.freepik.com/free-vector/food-delivery-cute-man-riding-motorcycles-cartoon-art-illustration_56104-609.jpg" width="350px" height="300px"/>
    <h1>Login to get yummmm ...</h1>
    <input type="email" placeholder="Email" name="email" required />
    <input type="password" placeholder="Password" required />
    <button>Get yumm</button>
    <p>Yet not a customer ? <span><Link to='/register'>Sign Up</Link></span></p>
  </div>
    )
}
export default Login;