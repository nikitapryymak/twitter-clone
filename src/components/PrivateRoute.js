import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom"
import { selectUser } from "../features/userSlice"

export default function PrivateRoute({ children, ...rest }) { // rest props are: { path, match, location, history }

    const currentUser = useSelector(selectUser);
    console.log('private route', currentUser);
    return (
    <Route {...rest} // path='/', match, etc.
      
      render={() => {
        return currentUser ? children : <Redirect to="/login" />
      }}
    />
    )
}