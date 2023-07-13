import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  return (
    <div>
        <Header />     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login"    element={<Login    />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;