import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import db from '../firebase';
import { toggleLike, toggleComment, toggleRetweet } from '../TweetFunctions';
import './Tweet.css'

export default function Tweet({ tweet }) {

    const currentUser = useSelector(selectUser);
    const [showForm, setShowForm] = useState(false);
    const [liked, setLiked] = useState(false);
    const [commented, setCommented] = useState(false);
    const [retweeted, setRetweeted] = useState(false);

    async function deleteTweet(e) {
        e.preventDefault();
        try {
            db.collection('tweets').doc(tweet.id).delete();
        } catch (err) {
            alert(err.message);
        }
    }

    async function handleLike() {
        if (liked) {
            toggleLike(tweet.id, false);
            return setLiked(false);
        }
        await toggleLike(tweet.id, true);
        setLiked(true);
    }
    async function handleComment() {
        if (commented) {
            toggleComment(tweet.id, false);
            return setCommented(false);
        }
        await toggleComment(tweet.id, true);
        setCommented(true);
    }
    async function handleRetweet() {
        if (retweeted) {
            toggleRetweet(tweet.id, false);
            return setRetweeted(false);
        }
        await toggleRetweet(tweet.id, true);
        setRetweeted(true);
    }

    return (
        <div className='Tweet'>
            <Link to='/'><img src={tweet.photoURL} alt="profile-pic"/></Link>
            <div className="single-tweet-content">

                <div className="single-tweet-info">
                    <Link to={`/profile/${tweet.uid}`} className="tweet-author">{tweet.displayName}</Link>
                    <div className="secondary-info">
                        <Link to={`/profile/${tweet.uid}`} id='username'>@{tweet.username} ·</Link>
                        <p id='date'>{tweet.timestamp?.toDate().toLocaleDateString()}</p>
                    </div>
                </div>
                <p className="single-tweet-text">
                    {tweet.content}
                </p>
                <div className="tweet-icons">
                    <div onClick={handleLike} className={`likes ${liked && 'liked'}`}><i className="far fa-heart" /> {tweet.likes}</div>
                    <div onClick={handleComment} className={`comments ${commented && 'commented'}`}><i className="far fa-comment" /> {tweet.comments}</div>
                    <div onClick={handleRetweet} className={`retweets ${retweeted && 'retweeted'}`}><i className="fas fa-retweet" /> {tweet.retweets}</div>
                </div>
                <div onClick={() => setShowForm(!showForm)} className='edit-tweet'>
                    <i className="fas fa-ellipsis-h" />
                </div>
                {showForm && 
                    <form className='edit-tweet-form'>
                        { (currentUser?.uid === tweet.uid) && 
                            <button onClick={deleteTweet} className='delete-tweet'>
                                <i className="fas fa-trash" />Delete Tweet
                            </button>}
                        { (currentUser?.uid !== tweet.uid) && 
                            <button className='follow-user'>
                                <i className="fas fa-user-plus" />Follow @{tweet.username}
                            </button> }
                    </form>}
            </div>
        </div>
    )
}