import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Posts from './pages/Posts';
import PostPage from "./pages/PostPage"; // No need to include the `.tsx` extension

function App() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:url" element={<PostPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
