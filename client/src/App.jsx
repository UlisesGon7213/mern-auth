import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './pages/SigIn'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';


export default function App() {
  return (
  <BrowserRouter>
  {/* header */}
  <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
  </BrowserRouter>
  );
}
