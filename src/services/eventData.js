import axios from 'axios';

// const GET_URL = 'https://loggerheaded-storie.000webhostapp.com/all-events.php';
// const POST_URL = 'https://loggerheaded-storie.000webhostapp.com/add-new-events.php';
const GET_URL = 'http://localhost/allevents/list-all-events.php';
const POST_URL = 'http://localhost/allevents/add-new-events.php';

class eventService {
  
  static saveEvent(event) {
    return axios.post(POST_URL, event);
  }

  static getEventList() {
    return axios.get(GET_URL);
  }
}

export default eventService;
