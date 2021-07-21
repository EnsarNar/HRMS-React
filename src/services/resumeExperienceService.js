import axios from "axios";
export default class ResumeAccountService {
    getById(id) {
        return axios.get(`http://localhost:8080/api/resumeExperience/findById?id=${id}`);
    };
    getAllByResumeId(id) {
        return axios.get(`http://localhost:8080/api/resumeExperience/findAllByResumeId?id=${id}`)
    }
}