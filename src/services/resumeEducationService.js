import axios from "axios";
export default class ResumEducationService {

    getById(id) {
        return axios.get(`http://localhost:8080/api/resumeEducation/findById?id=${id}`);
    }
    getAllByResumeIdOrderedByIdAsc(id) {
        return axios.get(`http://localhost:8080/api/resumeEducation/findAllByResumeId?id=${id}`);
    }
    addEducation(value) {
        return axios.post("http://localhost:8080/api/resumeEducation/add", value);
    }

};