import axios from "axios";
export default class ResumeLangugeService {
    getById(id) {
        return axios.get(`http://localhost:8080/api/resumeLanguage/findById?id=${id}`)
    }
    getAllByResumeId(id) {
        return axios.get(`http://localhost:8080/api/resumeLanguage/findAllByResumeId?id=${id}`)
    }
    addLanguage(values) {
        return axios.post("http://localhost:8080/api/resumeLanguage/add", values)
    }
};

