import axios from 'axios';

const GET_URL = 'http://localhost/projects/allevents/events/listEvents.php';
const POST_URL = 'http://localhost/projects/allevents/events/createEvents.php';

class eventService {
  static saveEvent(event) {
    return axios.post(POST_URL, event);
  }

  static getEventList() {
    return axios.get(GET_URL);
  }
}

export default eventService;