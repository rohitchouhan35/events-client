import axios from 'axios';

const GET_URL = 'http://localhost/projects/allevents/controllers/all-events.php';
const POST_URL = 'http://localhost/projects/allevents/controllers/add-new-events.php';

class eventService {
  static saveEvent(event) {
    return axios.post(POST_URL, event);
  }

  static getEventList() {
    return axios.get(GET_URL);
  }
}

export default eventService;