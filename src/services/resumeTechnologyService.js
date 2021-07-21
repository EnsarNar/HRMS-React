import axios from "axios";
export default class ResumeTechnologyService {
    getById(id) {
        return axios.getById(`http://localhost:8080/api/resumeExperience/findById?${id}`);
    }
};
