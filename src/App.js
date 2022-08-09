
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footter from "./Components/Footter";
import './App.css'
import Contacts from "./Components/Contacts";
import About from './Components/About';
import Home from './Components/Home';
import Departaments from './Components/Departaments';
import Doctors from './Components/Doctors';
import Blocks from './Components/Blocks';
import ContactsInfo from './Components/ContactsInfo';
import Article from './Components/Article';

function App() {
  return (
    <div className="App ">
     
      
      <Contacts />
      <Header />

      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Haqqimizda' element={<About/>} />
        <Route path='/Bolmelerimiz' element={<Departaments/>}/>
        <Route path='/Hekimlerimiz' element={<Doctors/>} />
        <Route path ='/Meqaleler' element={<Blocks/>} />
        <Route path='/Elaqe' element={<ContactsInfo/>} />
        <Route path='/Meqaleler/Meqale' element={< Article/>}/>
      </Routes>
      <Footter />
    </div>
  );
}

export default App;
