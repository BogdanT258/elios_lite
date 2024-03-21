import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPost from './Pages/AddPost';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className=''>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/addpost' element={<ProtectedRoute><AddPost /></ProtectedRoute>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ProtectedRoute({ children }) {
  if (localStorage.getItem('userData')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
}

export default App;
