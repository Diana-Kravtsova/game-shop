import { motion } from 'framer-motion';
import Button from '../../components/Button';

function Home(){
    return(
        <motion.div
            className={'Home'}
            direction={'left'}
        >
            <Button
                className={'Store'}
            >
                Go to the store
            </Button>
        </motion.div>
    )
}

export default Home;
