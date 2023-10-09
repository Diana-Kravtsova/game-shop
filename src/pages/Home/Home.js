import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

function Home() {
    let games = false;

    return (
        <motion.div className={'Home'} direction={'left'}>
            {games ?
                <Button className={'Store'}>
                    Go to the store
                </Button>
                : <Loading/>
            }
            <Footer/>
        </motion.div>
    );
}

export default Home;
