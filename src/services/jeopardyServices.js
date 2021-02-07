import axios from "axios";
class JeopardyService {
  // grab 3 random questions from API
  constructor(
    url = "http://jservice.io/api/random?count=3",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  getQuestions() {
    return this.client.get(this.url);
  }
}
export default JeopardyService;
