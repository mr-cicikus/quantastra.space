import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import Navbar from './components/Navbar';
import RoadmapMainPage from './pages/RoadmapMainPage';
import RMCheckpoint1 from './pages/roadmaps/RMCheckpoint1';
import RMCheckpoint2 from './pages/roadmaps/RMCheckpoint2';
import RMCheckpoint3 from './pages/roadmaps/RMCheckpoint3';
import RMCheckpoint4 from './pages/roadmaps/RMCheckpoint4';
import RMCheckpoint5 from './pages/roadmaps/RMCheckpoint5';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import MagPage from './pages/MagPage';
import { LanguageProvider } from './context/LanguageContext'; 
import { useState, useEffect } from "react";
import LoadingScreen from "./context/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for real content loading
    setTimeout(() => setLoading(false), 6000); 
  }, []);

  return (
    <LanguageProvider>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          <div className="flex min-h-screen flex-col justify-between">
            <div>
              <ScrollToTop />
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/roadmap" element={<RoadmapMainPage />} />
                <Route path="/checkpoint-1" element={<RMCheckpoint1 />} />
                <Route path="/checkpoint-2" element={<RMCheckpoint2 />} />
                <Route path="/checkpoint-3" element={<RMCheckpoint3 />} />
                <Route path="/checkpoint-4" element={<RMCheckpoint4 />} />
                <Route path="/checkpoint-5" element={<RMCheckpoint5 />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/mag" element={<MagPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      )}
    </LanguageProvider>
  );
}

export default App;
