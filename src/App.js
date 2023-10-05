import './scss/App.scss';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
    const location = useLocation();

    return (
        <div className={'App'}>
            <Header/>
            <AnimatePresence>
                <Routes location={location}>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
