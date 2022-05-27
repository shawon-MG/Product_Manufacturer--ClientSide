import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Portfolio from './Pages/Portfolio/Portfolio';
import Header from './Pages/Shared/Header';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
// import PurchaseProduct from './Pages/Purchase/PurchaseItem';
import PurchaseItem from './Pages/Purchase/PurchaseItem';
import MyOrders from './Pages/Dashboard/NormalUser/MyOrders';
import AddReview from './Pages/Dashboard/NormalUser/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import PayOrder from './Pages/Dashboard/NormalUser/PayOrder';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        <Route element={<RequireAuth />}>
          <Route path='/dashboard' element={<Dashboard />}> </Route>
          <Route path='/purchase/:id' element={<PurchaseItem />}> </Route>
          <Route path='/payment/:id' element={<PayOrder />}> </Route>
        </Route>

        <Route to='/dashboard' element={<Dashboard />}>
          <Route path='/my-orders' element={<MyOrders />}></Route>
          <Route path='/my-review' element={<AddReview />}></Route>
          <Route path='/my-profile' element={<MyProfile />}></Route>
        </Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
