import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Pricing from './Pages/Pricing';
import Blogs from './Pages/Blogs';
import Loginandsignup from './Pages/Loginandsignup';
import SeparateBlogs from './Pages/SeparateBlogs';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Createscript from './Pages/Createscript';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about-us' element={<Aboutus />} />
           <Route path='/Pricing' element={<Pricing />} />
           <Route path='/Blogs' element={<Blogs />} />
           <Route path='/loginandsignuppage' element={<Loginandsignup />} />
           <Route path='/Dashboard' element={<Dashboard />} />  
           <Route path='/Profile' element={<Profile />} />  
          <Route path='/Blogs/:id' element={<SeparateBlogs />} />  

      </Routes>
      </BrowserRouter>


{/* <Createscript /> */}

    </div>
  );
}

export default App;
