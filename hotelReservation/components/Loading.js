import React from 'react';
import loadingGif from '../images/gifs/loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>Room Data is currently loading...</h4>
            <img src={loadingGif} alt="Room Data is currently loading" />
        </div>
    )
}

export default Loading