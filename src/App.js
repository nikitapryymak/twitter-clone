import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import MobileFooter from './components/MobileFooter';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import { login, logout } from './features/userSlice';
import { auth } from './firebase';
import ComposeTweet from './components/ComposeTweet';

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect ran.');
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) { 
        dispatch(logout()); 
        setLoading(false); 
        return}
      console.log('auth state change:', user);
      const { uid, displayName, photoURL } = user;
      const username = displayName.split(" ").join("").toLowerCase(); // removes spaces and makes lowercase

      dispatch(login({ uid, displayName, username, photoURL }));
      setLoading(false);
    }, err => { alert(err.message) });
    return unsubscribe;
  }, [dispatch]);

  return !loading ? (
    <div className="App">
    <Router>
      <MobileFooter />
        <Switch>

          <PrivateRoute exact path='/profile/:uid'>
            <Profile /></PrivateRoute>

          <Route exact path='/'>
            <Home /></Route>
          <Route path='/login'>
            <Login /></Route>
          <Route path='/compose-tweet'>
            <ComposeTweet /></Route>
 
        </Switch>
    </Router>
    </div>
  ) : <h3 style={{ textAlign: 'center', marginTop: '5rem', fontWeight: '300' }}>Loading ...</h3>
}
export default App;