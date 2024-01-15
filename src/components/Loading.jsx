import { motion } from 'framer-motion';
import { CircularProgress } from 'react-cssfx-loading';

function Loading() {
    return (
        <motion.div className={'Loading'}>
            <CircularProgress
                height='100px'
                width='100px'
                color='#9922ff'
            />
        </motion.div>
    );
}

export default Loading;
