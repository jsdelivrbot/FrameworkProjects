import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        //Key must be unique. Helps with reacts performance, otherwise the list is recreated everytime you add an item
        return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;