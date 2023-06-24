import './App.css'
import { Carousel } from './components/carousel/Carousel';
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Team } from './components/team/Team';
import {Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/history' element={<Carousel />}/>
        <Route path='/team' element={<Team />}/>
      </Routes>
      {/* <Home />
      <Carousel /> */}
    </>
  )
}

export default App


// https://ca-times.brightspotcdn.com/dims4/default/dd18896/2147483647/strip/true/crop/4800x3200+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F01%2F3d%2F36f92a4c4086a7bf5ed8c860b605%2F1261350-la-me-storms-aftermath007-ls.jpg