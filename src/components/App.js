import React, {useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import './App.css';

const App = () => {
    const [videos,setVideos] = useState([]);
    const [selectedVideo,setselectedVideo] = useState(null);
    const onVideoSelect = (video) => {
          setselectedVideo(video);
    };
    const onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        setVideos(response.data.items);
        setselectedVideo(response.data.items[0]);
    };
    return(
        <div>
            <div className="ui container">
            <SearchBar onTermSubmit= {onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">  <VideoDetail video = {selectedVideo} />  </div>
                        <div className="five wide column"> <VideoList onVideoSelect={onVideoSelect} videos={videos}/> </div>
                    </div> 
                </div> 
            </div>
        </div>
    );   

}
export default App;