import { motion } from 'framer-motion';


function Button(props) {
    const {
        children,
        classname = '',
        type = 'button',
        title,
        handleClick
    } = props;

    return (
        <motion.button
            className={`Button ${classname}`}
            type={type}
            title={title}
            onClick={handleClick}
        >
            {children}
        </motion.button>
    );
}

export default Button;
