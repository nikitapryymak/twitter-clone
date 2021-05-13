import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import './MobileFooter.css';

export default function MobileFooter() {

    const currentUser = useSelector(selectUser);

    return (
        <footer className='MobileFooter'>
            <NavLink exact to='/' activeClassName='active'><i className="fas fa-home" /></NavLink>
            <NavLink to={`/profile/${currentUser?.uid}`}><i className="fas fa-user" /></NavLink>
            <NavLink to='/notif'><i className="fas fa-bell" /></NavLink>
            <NavLink to='/messages'><i className="far fa-envelope" /></NavLink>
        </footer>
    )
}
