import axios from "axios";

export default class WorkTime {
    getWorkTimes() {
        return axios.get("http://localhost:8080/api/workTime/getAll");
    }



};