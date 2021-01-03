import React, { useEffect, useState } from 'react'
import './Feed.css'
import StoryReal from './StoryReal'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {

    const [posts, setPosts] = useState([]);

    //! realtime connection
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className="feed">
            <StoryReal />
            <MessageSender />
            { posts.map((post) => (
                <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image} />
            )) }

            {/* <Post
                profilePic='https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.03.01%20PM.png'
                message='WOW this works! '
                timestamp='This is a timestamp'
                username='emilyoun'
                image='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg'
            />
            <Post
                profilePic='https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.03.01%20PM.png'
                message='WOW this works'
                timestamp='This is a timestamp'
                username='emilyoun'
            /> */}
        </div>
    )
}

export default Feed
