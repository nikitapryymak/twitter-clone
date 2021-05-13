import TweetBox from "./TweetBox";
import './ComposeTweet.css';
import { Link } from "react-router-dom";

export default function ComposeTweet() {
    return (
        <div className='ComposeTweet'>
            <div className="tweetbox-wrapper">
                <div className="home-arrow"><Link to='/'><i className="fas fa-arrow-left" /></Link></div>
            </div>
            <TweetBox />
        </div>
    )
}