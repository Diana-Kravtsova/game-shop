import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Headroom from 'react-headroom';
import { motion } from 'framer-motion';
import {
    RiReactjsLine,
    RiShoppingBag2Line,
} from 'react-icons/ri';

function Header() {
    const navigate = useNavigate();
    const navigateToHome = () => navigate('/');

    return (
        <Headroom upTolerance={1}>
            <motion.div
                className={'Header'}
                direction={'down'}
                distance={20}
            >
                <Button
                    className={'Logo'}
                    handleClick={navigateToHome}
                >
                    <RiReactjsLine /> GameShop
                </Button>

                <Button
                    className={'Cart'}
                >
                    <RiShoppingBag2Line />
                    Cart
                </Button>

            </motion.div>
        </Headroom>

    );
}

export default Header;
