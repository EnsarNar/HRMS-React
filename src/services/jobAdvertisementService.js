import axios from "axios";
export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobAdvertisement/getAll");
    }
    addJobAdvertisement(value) {
        return axios.post("http://localhost:8080/api/jobAdvertisement/add", value)
    }
    getJobAdvertisementsWhereIsNotActive() {
        return axios.get("http://localhost:8080/api/jobAdvertisement/getAllNotActiveAdvertisementsOrderedByDesc")
    }
    getJobAdvertisementsWhereActive() {
        return axios.get("http://localhost:8080/api/jobAdvertisement/getAllActiveAdvertisements")
    }
    changeIsActiveOfJobAdvertisement(id) {
        return axios.post("http://localhost:8080/api/jobAdvertisement/changeIsActiveOfJobAdvertisement?id=" + id);
    }
    getJobAdvertisementsWhereFiltered(filter, pageNo, pageSize) {
        return axios.get();
    }
    getByFilterWithPages(pageNo, pageSize, filter) {
        return axios.post(`http://localhost:8080/api/jobAdvertisement/getByFilterWithPages?pageNo=${pageNo}&pageSize=${pageSize}`, filter)
    }

}