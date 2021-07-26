import axios from "axios";
export default class ResumeAccountService {
    getById(id) {
        return axios.get(`http://localhost:8080/api/resumeAccount/findById?=${id}`)
    }
    getByResumeId(id) {
        return axios.get(`http://localhost:8080/api/resumeAccount/findAllByResumeId?id=${id}`)
    }
    addAccount(values) {
        return axios.post("http://localhost:8080/api/resumeAccount/add", values)
    }
};
