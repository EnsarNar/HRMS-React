import axios from "axios";
export default class ResumeTechnologyService {
    addTechnology(values) {
        return axios.post("http://localhost:8080/api/resumeTechnology/add", values)
    }
    updateTechnology(value) {
        return axios.put("http://localhost:8080/api/resumeTechnology/update", value);
    }
    getById(id) {
        return axios.get(`http://localhost:8080/api/resumeExperience/findById?=${id}`);
    }
    getAllById(id) {
        return axios.get(`http://localhost:8080/api/resumeTechnology/findAllByResumeId?id=${id}`)


    };
}
