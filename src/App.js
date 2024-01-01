import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Navbar from './Components/Navbar/Navbar';
import MovieDetails from './Pages/MovieDetails'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
