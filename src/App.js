import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contacts from './routes/Contacts';
import SignUp from './routes/SignUp';


function App() {
  return (
      <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      
      </div>
  );
}

export default App;
