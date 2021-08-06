import axios from "axios";
export default class ResumeCoverLetter {
    addCoverLetter(values) {
        return axios.post("http://localhost:8080/api/resumeCoverLetter/add", values)
    }
    updateCoverLetter(values) {
        return axios.put("http://localhost:8080/api/resumeCoverLetter/update", values)
    }
    getAllByResumeId(id) {
        return axios.get(`http://localhost:8080/api/resumeCoverLetter/getAllByResumeId?id=${id}`)
    }
};