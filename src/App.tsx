import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Posts from './pages/Posts'

function App() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </main>
        </div>
    )
}



export default App