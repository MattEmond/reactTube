import React from 'react';

import VideoListItem from './video_list_item';

// Loop through array of videos and return the items in the video_list_item component
const videoList = (props) => {
 const videoItems = props.videos.map((video) => {
   return (
    <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
 });

  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default videoList
