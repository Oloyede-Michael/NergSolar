import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductPage from './components/Products';

// ✅ Layout only for Landing Page
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Public Landing Page with Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/all" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}