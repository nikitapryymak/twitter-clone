import { useEffect, useState } from "react";
import db from "../firebase";

export default function useTweetListener() {

    const [tweets, setTweets] = useState(null);

    useEffect(() => {
        console.log('HOME useEffect ran');
        const unsub = db.collection('tweets').orderBy('timestamp', 'desc')
        .onSnapshot(snap => {
            setTweets(snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        });
        return () => {console.log('Home unmounted'); return unsub();}
    }, []);
    return tweets
}