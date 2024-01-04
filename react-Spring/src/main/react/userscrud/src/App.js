import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddUser from './components/usersComponents/AddUser';
import EditUser from './components/usersComponents/EditUser';
import ShowUser from './components/usersComponents/ShowUser';
function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="editUser/:id" element={<EditUser />} />
          <Route path="showUser/:id" element={<ShowUser />} />
      </Routes>
    </BrowserRouter>
 
    
  );
}

export default App;
