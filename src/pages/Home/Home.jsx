import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import Transition from '../../components/Transition';
import { useState } from 'react';
import GameCard from '../../components/GameCard';

function Home() {
    const [games, setGames] = useState();

    return (
        <Transition className={'Home'} direction={'left'}>
            {games
                ? <Transition className={'Grid'}>
                    {games.map(({id, name, background_image}, i) => (
                        <GameCard/>
                    ))}
                    <Button className={'Store'}>
                        Go to the store
                    </Button>
                </Transition>
                : <Loading/>
            }
            <Footer/>
        </Transition>
    );
}

export default Home;
