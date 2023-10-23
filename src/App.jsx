import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Explore from './components/EXplore';
import Collection from './components/Collection';
import Community from './components/Community';
import Navbar from './components/Navbar';
import ImageDetail from './components/ImageDetail';

function App() {

  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<ImageDetail/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/community' element={<Community/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
