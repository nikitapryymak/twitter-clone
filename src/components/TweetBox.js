import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUser } from '../features/userSlice';
import db, { timestamp } from '../firebase';
import defaultPic from '../img/default.png';
import './TweetBox.css';

export default function TweetBox() {

    const currentUser = useSelector(selectUser);
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();

    async function addTweet() {
        if (!currentUser) { return history.push('/login') }
        try {
            const { uid, displayName, username, photoURL } = currentUser;
            db.collection('tweets').add({
                uid,
                displayName,
                username,
                photoURL,
                content: tweet,
                timestamp: timestamp(),
                likes: 0,
                comments: 0,
                retweets: 0
            });
            setTweet('');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className='TweetBox'>
            <img src={currentUser ? currentUser.photoURL : defaultPic} alt="profile-pic"/>
            <div className="tweet-content">
                <textarea className="tweet-text" rows="5" placeholder="What's happening?"
                    value={tweet}
                    onChange={e => setTweet(e.target.value)} />
                <div className="submit-tweet">
                    <i className="fas fa-image"></i>
                    <button 
                        onClick={addTweet}
                        disabled={(tweet === '') ? true : false }
                        className={(tweet === '') ? 'disabled' : ''}
                        id='tweet-btn'
                    >Tweet</button>
                </div>
                { error && <p className='error'>{error}</p> }
            </div>
        </div>
    )
}