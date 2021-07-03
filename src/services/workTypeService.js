import axios from "axios";

export default class WorkType {
    getWorkTypes() {
        return axios.get("http://localhost:8080/api/workType/getAll");
    }



};