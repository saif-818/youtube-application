import axios from 'axios';

const KEY = 'AIzaSyCgTdDAc415zLsxkf_Y6Awl6ST-zDTEaB4';

export default axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
          part: 'snippet',
          maxResults: 5,
          api_key: KEY,
      }
});