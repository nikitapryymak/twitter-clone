import { useEffect, useState } from "react";
import db from "../firebase";

export default function useUserTweets(uid) {

    const [tweets, setTweets] = useState(null);

    useEffect(() => {
        console.log('Profile useEffect ran');
        const unsub = db.collection('tweets').where('uid', '==', `${uid}`)
        .onSnapshot(snap => {
            setTweets(snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        });
        return () => {console.log('Profile unmounted'); return unsub();}
    }, [uid]);
    return tweets;
}