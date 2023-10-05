import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <NavLink to={'/'} className={'Button'}>
                GameShop
            </NavLink>
        </footer>
    );
}

export default Footer;
