import './scss/App.scss';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { gameList } from './rawg-api/gameList';

const loadGames = async (search = '') => {
    const response = await gameList({page_size: 50, search});
    let {results} = response;
    results = response.filter((game) => game.rating_count > (search ? 50 : 10));
    //results.forEach((game) => game.price = getPrice(game));
    return results;
};

function App() {
    const location = useLocation();

    return (
        <div className={'App'}>
            <Header/>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route
                        path={'/'}
                        element={<Home loadGames={loadGames}/>}
                    />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
