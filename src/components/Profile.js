import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import useUserTweets from '../hooks/useUserTweets';
import MobileTweetIcon from './MobileTweetIcon';
import Tweet from './Tweet';
import './Profile.css';

export default function Profile() {

    const currentUser = useSelector(selectUser);
    const tweets = useUserTweets(currentUser.uid)
    console.log(tweets);

    return (
        <div className='Profile'>
            <div className="profile-header">
                <div className="home-arrow">
                    <Link to='/'><i className="fas fa-arrow-left" /></Link>
                </div>

                <div className="header-user-info">
                    <h1>{currentUser.displayName}</h1>
                    <p className='secondary'>5 Tweets</p>
                </div>
            </div>

            <div className="profile-info">
                <div className="background-img">
                    {/* <img src="poop" alt="background" /> */}
                </div>
                <div className="details">
                    <div className="prof-pic-wrapper">
                       <img src={currentUser.photoURL} alt="profile" /></div> 
                    <button className='edit-prof-btn'>Edit Profile</button>
                    <h1>{currentUser.displayName}</h1>
                    <p className='secondary username'>@{currentUser.username}</p>
                    <p>Enter Bio Here</p>
                    <p className='secondary'>Joined December 2020</p>
                    <div className="follower-stats">
                        <p className='secondary'><span>10</span>Followers</p>
                        <p className='secondary following'><span>5</span>Following</p>
                    </div>
                </div>

            </div>
            <nav>
                <div>Tweets</div>
                <div>Replies</div>
                <div>Media</div>
                <div>Likes</div>
            </nav>

            { (tweets?.length > 0) && tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />) }

            { (tweets?.length === 0) && <p className='no-tweets'>No tweets yet. Maybe <Link to='/compose-tweet'>create one?</Link></p> }
            <MobileTweetIcon />
        </div>
    )
}