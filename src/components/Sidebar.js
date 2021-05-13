import { useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import twitter from '../img/twitter.png';
import Logout from './Logout';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const currentUser = useSelector(selectUser);
    const history = useHistory();

    function handleSignout() {
        auth.signOut(); 
        history.push('/login');
    }

    return (
        <div className='Sidebar'>
            <Link to='/' id='sidebar-logo'><img src={twitter} alt="twitter-logo" /></Link>
            <div className="sidebar-link">
                <NavLink exact to='/'>
                    <i className="fas fa-home" /><p>Home</p></NavLink>
                </div>
            <div className="sidebar-link">
                <NavLink to={`/profile/${currentUser?.uid}`}>
                <i className="fas fa-user" /><p>Profile</p></NavLink>
                </div>
            <div className="sidebar-link" onClick={handleSignout}>
                <div className='fake-Link'><Logout /><p>Sign Out</p></div>
                </div>
            <Link to='/compose-tweet' className='sidebar-tweet-btn'>
                <button id='tweet-btn'><p>Tweet</p><i className="fas fa-feather" /></button></Link>
        </div>
    )
}
export default React.memo(Sidebar);