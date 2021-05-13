// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import db from '../firebase';

// export const fetchTweets = createAsyncThunk(
    // 'tweets/fetchTweets',
    // async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = res.json();
    //     console.log('before dispatch',data);
    //     return data;
    // }
    // async () => {
        // let tweets = [];
        // db.collection('tweets')
        // .onSnapshot(snap => {
        //     snap.docs.map(doc => 
        //         tweets.push({
        //             docId: doc.id,
        //             ...doc.data()
        //         })
        //     )
        // });
        // console.log('before dispatch:', tweets);
        // return tweets;
    // }
// );

// export const tweetsSlice = createSlice({
//     name: 'tweets',
//     initialState: {
//       tweets: null,
//       status: 'idle',
//       error: null
//     },
//     extraReducers: {
//       [fetchTweets.pending]: (state) => {
//         console.log('loading ...');
      
//         state.status = 'loading';
//       },
//       [fetchTweets.fulfilled]: (state, action) => {
//         console.log('completed!');
//         console.log(action);
//         state.tweets = action.payload; // array
//         state.status = 'completed';
//       },
//       [fetchTweets.rejected]: (state, action) => {
//         console.log('error:', action.error.message);
//         state.error = action.error.message;
//         state.status = 'failed';
//       },
//     }
// });

// export const { login, logout } = tweetsSlice.actions;

// export const selectTweets = (state) => state.tweets.tweets;
// export const selectTweetsStatus = (state) => state.tweets.status;
// export const selectTweetsError = (state) => state.tweets.error;

// export default tweetsSlice.reducer;