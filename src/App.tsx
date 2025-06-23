import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Power from './pages/Power.tsx';
import Brightness from './pages/Brightness.tsx';
import About from "./pages/About.tsx";
import RemoteControl from "./pages/RemoteControl.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/power" element={<Power />} />
                <Route path="/remotecontrol" element={<RemoteControl />} />
                <Route path="/brightness" element={<Brightness />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
