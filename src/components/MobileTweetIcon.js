import { Link } from "react-router-dom";

export default function MobileTweetIcon() {
    return (
        <div className='MobileTweetIcon'>
            <Link to='/compose-tweet'>
                <button id='tweet-btn'>
                    +
                    <i className="fas fa-feather" />
                </button>
            </Link>
        </div>
    )
}