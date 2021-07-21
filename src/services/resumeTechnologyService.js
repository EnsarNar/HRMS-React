import axios from "axios";
export default class ResumeTechnologyService {
    getById(id) {
        return axios.get(`http://localhost:8080/api/resumeExperience/findById?=${id}`);
    }
    getAllById(id) {
        return axios.get(`http://localhost:8080/api/resumeTechnology/findAllByResumeId?id=${id}`)
    }
};
