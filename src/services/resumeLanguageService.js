import axios from "axios";
export default class ResumeLangugeService {
    addLanguage(values) {
        return axios.post("http://localhost:8080/api/resumeLanguage/add", values)
    }
    updateLanguage(values) {
        return axios.put("http://localhost:8080/api/resumeLanguage/update", values)
    }
    getById(id) {
        return axios.get(`http://localhost:8080/api/resumeLanguage/findById?id=${id}`)
    }
    getAllByResumeId(id) {
        return axios.get(`http://localhost:8080/api/resumeLanguage/findAllByResumeId?id=${id}`)
    }

};

