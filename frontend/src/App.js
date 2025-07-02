import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Header from './pages/header/Header';
import Display from './pages/dashboard/Display';
import PostEmployee from './pages/employee/PostEmployee';
import Employees from './pages/employee/Employees';
import UpdateEmployee from './pages/employee/UpdateEmployee';
function App() {
  return (
    <BrowserRouter>
    <Toaster/>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Display/>}/>
        <Route exact path='/employees' element={<Employees/>}/>
        <Route exact path='/employee' element={<PostEmployee/>}/>
        <Route exact path='/update/:id' element={<UpdateEmployee/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
