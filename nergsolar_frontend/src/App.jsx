import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductPage from './components/Products';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex-grow overflow-x-hidden"> 
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="overflow-x-hidden"> {/* Wrap Router */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products/all" element={<ProductPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}