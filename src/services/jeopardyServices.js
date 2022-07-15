import axios from "axios";
class JeopardyService {
  // grab 3 random questions from API
  constructor(
    url = "https://jservice.kenzie.academy/api/clues",
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
