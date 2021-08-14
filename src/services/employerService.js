import axios from "axios";
export default class EmployerService {

    getEmployers() {
        return axios.get("http://localhost:8080/api/employers/getall");
    };
    getEmployerById(id) {
        return axios.get(`http://localhost:8080/api/employers/getById?id=${id}`);
    }
    updatEmployer(values) {
        return axios.put("http://localhost:8080/api/employers/update", values)
    }
    selectEmployers() {
        return axios.get("http://localhost:8080/api/employers/selectEmployers");
    }
};