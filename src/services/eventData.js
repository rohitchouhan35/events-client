import axios from 'axios';

const BASE_URL_HOSTED = "https://loggerheaded-storie.000webhostapp.com";

const GET_EVENT_LIST_URL = BASE_URL_HOSTED + '/list-all-events.php';

const ADD_EVENT_URL = BASE_URL_HOSTED + '/add-new-events.php';
const ADD_USER_URL = BASE_URL_HOSTED + '/add-new-user.php';
const GET_USER_LIST_URL = BASE_URL_HOSTED + '/list-all-users.php';


// const BASE_URL_LOCAL = "http://localhost/events-server-main";

// const GET_EVENT_LIST_URL = BASE_URL_LOCAL + '/list-all-events.php';
// const ADD_EVENT_URL = BASE_URL_LOCAL + '/add-new-events.php';
// const ADD_USER_URL = BASE_URL_LOCAL + '/add-new-user.php';
// const GET_USER_LIST_URL = BASE_URL_LOCAL + '/list-all-users.php';

class eventService {
  
  static saveEvent(event) {
    return axios.post(ADD_EVENT_URL, event);
  }

  static getEventList() {
    return axios.get(GET_EVENT_LIST_URL);
  }

  static saveUser(user) {
    return axios.post(ADD_USER_URL, user);
  }

  static getUserList() {
    return axios.get(GET_USER_LIST_URL);
  }
}

export default eventService;
