import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-darker text-slate-100">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
