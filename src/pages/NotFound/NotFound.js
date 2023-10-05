import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const duration = 3;

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, duration * 1000);
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <motion.div className={'NotFound'}>
            <h1>404</h1>
            <p>Page not found.</p>
            <div className={'Redirect'}>
                Redirecting to homepage...
                <motion.div
                    className={'ProgressBar'}
                    initial={{width: 0}}
                    animate={{width: '100%', transition: {duration}}}
                />
            </div>
        </motion.div>
    );
}

export default NotFound;
