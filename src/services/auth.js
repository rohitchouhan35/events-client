import axios from 'axios';

const GET_URL = 'http://localhost/projects/allevents/events/authUrl.php';

class auth {
  static authurl() {
    return axios.get(GET_URL);
  }
}

export default auth;