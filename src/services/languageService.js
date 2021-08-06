import axios from "axios";
export default class LanguageService {
    getById(id) {
        return axios.get(`http://localhost:8080/api/languages/getById?id=${id}`)
    }
    getAll() {
        return axios.get("http://localhost:8080/api/languages/getAll");
    }
}