import axios from 'axios';

const BASE_URL_HOSTED = "https://loggerheaded-storie.000webhostapp.com";
const GET_URL = BASE_URL_HOSTED + '/list-all-events.php';
const POST_URL = BASE_URL_HOSTED + '/add-new-events.php';

// const BASE_URL_LOCAL = "http://localhost/events-server-main";
// const GET_URL = BASE_URL_LOCAL + '/list-all-events.php';
// const POST_URL = BASE_URL_LOCAL + '/add-new-events.php';

class eventService {
  
  static saveEvent(event) {
    return axios.post(POST_URL, event);
  }

  static getEventList() {
    return axios.get(GET_URL);
  }
}

export default eventService;
