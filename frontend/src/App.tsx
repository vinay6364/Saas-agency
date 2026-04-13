import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

// A simple dashboard placeholder for when they log in
function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">Agency Dashboard</h1>
      <p className="text-gray-500 mt-2">You are successfully logged in!</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
