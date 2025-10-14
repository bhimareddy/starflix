import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './Authentication/LoginPage';
import Home from './Pages/Home'
import MovieItem from './Component/MovieItem';
import HeaderPage from './Component/HeaderPages';
import Movies from './Pages/Movies';
import New from './Pages/New';
import TvShow from './Pages/TvShow';
import Account from './Pages/Account';
import TvshowPages from './Component/TvshowPages';
import Moredetail from './Pages/Moredetail';
import { Search } from 'react-bootstrap-icons';
import TvShowdetail from './Pages/TvShowdetail'



function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage /> } />
      <Route path="/home" element={<Home />} />
       <Route path="/Movies" element={<Movies />} />
       <Route path="/TvShow" element={<TvShow />} />
       <Route path='/New' element={<New/>}/>
       <Route path="/" element={<MovieItem />} />
        <Route path="/movie/:title" element={<HeaderPage />} />
        <Route path="/MovieItem/:title" element={<MovieItem />} />
        <Route path='/Account'element={<Account />} />
      <Route path="/" element={<MovieItem />} />
        <Route path="/Tvshow/:title" element={<TvshowPages />} />
         <Route path='/Moredetail' element={<Moredetail/>}/>
         <Route path='/Search' element={<Search/>}/>
         <Route path="/" element={<TvShow />} />
        <Route path="/Tvshowdetail/:title" element={<TvShowdetail />} />
    </Routes>
   </BrowserRouter>
  );
}


export default App;
