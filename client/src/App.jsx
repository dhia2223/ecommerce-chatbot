import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Client/Home";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProtectedRoute from "./components/Client/ProtectedRoute";


//
// import AddProduct from './pages/Admin/Products/AddProduct';
// import ProductList from './pages/Admin/Products/ProductList';
// import UpdateProduct from './pages/Admin/Products/UpdateProduct';
// import UserList from './pages/Admin/Users/UserList';
// import EditUser from './pages/Admin/Users/EditUser';

export default function App() {
  return (

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />} />
        {/* <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/update/:id" element={<UpdateProduct />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/users/edit/:id" element={<EditUser />} /> */}

        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      </Routes>

  );
}
