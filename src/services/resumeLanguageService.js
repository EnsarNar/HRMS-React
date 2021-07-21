import axios from "axios";
export default class ResumeLangugeService {
    getById(id) {
        axios.get(`http://localhost:8080/api/resumeLanguage/findById?${id}`)
    }
};

