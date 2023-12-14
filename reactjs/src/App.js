import logo from './logo.svg';
import './App.css';
// import Registration from './components/signup'
// import './assets/style/signup.css';
// import Registration from './Registration'
// import Login from './components/login';
// import './assets/style/login.css';
import Login from './components/assets/login'
import Registration from './components/assets/sign';
import './components/assets/sign.css'
import './components/assets/login.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            { <Route path='/register' element={<Registration/>}/> }
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;