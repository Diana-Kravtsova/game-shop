import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

function Home() {
    return (
        <motion.div
            className={'Home'}
            direction={'left'}
        >
            <Button
                className={'Store'}
            >
                Go to the store
            </Button>
            <Footer/>
        </motion.div>
    );
}

export default Home;
