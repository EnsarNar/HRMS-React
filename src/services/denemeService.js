import axios from "axios";
export default class DenemeService {
    updateEducation(value) {
        return axios.put("http://localhost:8080/api/resumeEducation/update", value);
    }
}