import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading.......</div>
    }
    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;
    return (
        <div className="row">
            <div className="video-detail col-md-12">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title={video.snippet.title} className="embed-responsive-item" src={url} allowfullscreen></iframe>
                </div>
                <div className="details">
                    <div><h3>{video.snippet.title}</h3></div>
                    <div><p>{video.snippet.description}</p></div>
                </div>
            </div>
        </div>
        
    )
};

export default VideoDetail;