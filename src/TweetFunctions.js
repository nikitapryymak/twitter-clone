import db, { increment } from './firebase';

export async function toggleLike(id, add) { // add = boolean
    try {
        db.collection('tweets').doc(id)
        .update({ 
            likes: add ? increment(1) : increment(-1)
        });
    } catch (err) {
        alert(err.message)
    }
}
export async function toggleComment(id, comment) {
    try {
        db.collection('tweets').doc(id)
        .update({ 
            comments: comment ? increment(1) : increment(-1)
        });
    } catch (err) {
        alert(err.message)
    }
}
export async function toggleRetweet(id, retweet) {
    try {
        db.collection('tweets').doc(id)
        .update({ 
            retweets: retweet ? increment(1) : increment(-1)
        });
    } catch (err) {
        alert(err.message)
    }
}