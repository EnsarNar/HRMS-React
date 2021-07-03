import axios from "axios";
export default class ResumeService {

    getResumes() {
        return axios.get("http://localhost:8080/api/resume/getAll");
    }
    addResume(data) {
        return axios.post("http://localhost:8080/api/resume/add", data)
    }
    updateResumesPhoto(id) {
        return axios.put("http://localhost:8080/api/resume/addPhoto?id=${id}");
    }
    deleteResume(id) {
        return axios.delete("http://localhost:8080/api/resume/delete?id=${id}");
    }

};