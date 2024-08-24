import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductView from './components/ProductView';
import Login from '../src/pages/auth/Login'
import Account from './components/Account';
import Cart from './pages/Cart/Cart';
import Wishlist from '../src/pages/WishList/Wishlist';
import DeliveryDetails from './pages/Cart/DeliveryDetails';
import OrderDetails from './pages/Cart/OrderDetails';
import PostOrderPage from './pages/Cart/PostOrderPage';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from '../src/pages/Routes/PrivateRoutes/PrivateRoute'
function App() {
  return (
    <div className="padding-10">
      <Dashboard />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <PrivateRoute path='/AdminDashboard' element={<AdminDashboard />} /> */}
        <Route path='/shop' element={<Shop />} />
        <Route path="/product-view/:id" element={<ProductView />} />
        <Route
          path='/login'
          element={<Login />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/account' element={<Account />} />
        <Route path='/cart' element={<Cart />} >
          <Route path='checkout' element={<DeliveryDetails />} />
          <Route path='' element={<DeliveryDetails />} />
          <Route path='orderdetails' element={<OrderDetails />} />
          <Route path='orderstatus' element={<PostOrderPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
