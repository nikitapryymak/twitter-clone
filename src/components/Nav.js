import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div style={{ padding: '2rem' }}>
            <Link to='/'>HOME</Link>
            <Link to='/login'>LOGIN</Link>
        </div>
    )
}
