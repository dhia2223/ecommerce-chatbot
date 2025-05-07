import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Client/Home";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProtectedRoute from "./components/Client/ProtectedRoute";
import ProtectedAdminRoute from "./components/Admin/ProtectedAdminRoute";
import Products from "./pages/Client/Products";
import Account from './pages/Client/Account';
import ProductPage from "./pages/Client/ProductDetails";
import Checkout from "./pages/Client/Checkout";
import Orders from "./pages/Client/Orders";


//
import AddProduct from './pages/Admin/Products/AddProduct';
import ProductList from './pages/Admin/Products/ProductList';
import UpdateProduct from './pages/Admin/Products/UpdateProduct';
import UserList from './pages/Admin/Users/UserList';
import AddUser from './pages/Admin/Users/AddUser';
import NotAuthorized from "./pages/Admin/NotAuthorized";  
// import EditUser from './pages/Admin/Users/EditUser';


export default function App() {
  return (

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-authorized" element={<NotAuthorized />} />

        <Route path="/admin" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
        <Route path="/admin/products" element={<ProtectedAdminRoute><ProductList /></ProtectedAdminRoute>} />
        <Route path="/admin/products/add" element={<ProtectedAdminRoute><AddProduct /></ProtectedAdminRoute>} />
        <Route path="/admin/products/update/:id" element={<ProtectedAdminRoute><UpdateProduct /></ProtectedAdminRoute>} />
        <Route path="/admin/users" element={<ProtectedAdminRoute><UserList /></ProtectedAdminRoute>} />
        <Route path="/admin/users/add" element={<ProtectedAdminRoute><AddUser /></ProtectedAdminRoute>} />
        {/* <Route
          path="/admin"
          element={
            user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />
          }
        /> */}
      
        
        {/* <Route path="/admin/users/edit/:id" element={<EditUser />} /> */}

        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:productId" element={<ProductPage/>} />

        {/* <Route path="/products/:id" element={<ProtectedRoute><Products/></ProtectedRoute>} /> */}
        <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
        <Route path="/my-orders" element={<ProtectedRoute><Orders/></ProtectedRoute>} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

  );
}
