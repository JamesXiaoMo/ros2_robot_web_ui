import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Battery from './pages/Battery.tsx';
import About from "./pages/About.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/battery" element={<Battery />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
