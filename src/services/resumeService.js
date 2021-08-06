import axios from "axios";

export default class ResumeService {

    getResumes() {
        return axios.get("http://localhost:8080/api/resume/getAll");
    }
    getById(id) {
        return axios.get(`http://localhost:8080/api/resume/findById?id=${id}`)
    }
    addResume(data) {
        return axios.post("http://localhost:8080/api/resume/add", data)
    }
    updateResumesPhoto(id) {
        return axios.put(`http://localhost:8080/api/resume/addPhoto?id=${id}`);
    }
    deleteResume(id) {
        return axios.delete();
    }
    getResumesByCandidateId(id) {
        return axios.get(`http://localhost:8080/api/resume/getByCandidateId?id${id}`);
    }
    addPhoto(photo) {
        return axios.post(`http://localhost:8080/api/resume/addPhoto?id=${photo.id}`, photo)
        // return axios.post("http://localhost:8080/api/resume/addPhoto", photo)
    }


};