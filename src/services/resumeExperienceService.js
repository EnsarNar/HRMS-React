import axios from "axios";
export default class ResumeExperienceService {
    updateExperience(values) {
        return axios.put("http://localhost:8080/api/resumeExperience/update", values);
    };
    getById(id) {
        return axios.get(`http://localhost:8080/api/resumeExperience/findById?id=${id}`);
    };
    getAllByResumeId(id) {
        return axios.get(`http://localhost:8080/api/resumeExperience/findAllByResumeId?id=${id}`);
    }
    addExperience(values) {
        return axios.post("http://localhost:8080/api/resumeExperience/add", values);
    }
}