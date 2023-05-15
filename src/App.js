import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
