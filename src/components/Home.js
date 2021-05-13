import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import useTweetListener from "../hooks/useTweetListener";
import { animateScroll } from 'react-scroll';
import './Home.css'
import Sidebar from "./Sidebar";
import MobileTweetIcon from "./MobileTweetIcon";
import Logout from "./Logout";

export default function Home() {

    const tweets = useTweetListener(); // sets up listener for all tweets

    function handleScroll() {
        animateScroll.scrollToTop({ duration: 750 });
    }

    return (
        <div className='Home'>
            <div className="Feed">
                <Sidebar />
                <div onClick={handleScroll} className="header">Home <Logout /></div>
                <TweetBox />
                <div className="separator" />
                { tweets && tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />) }

                <MobileTweetIcon />
            </div>
        </div>
    )
}