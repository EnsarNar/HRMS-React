import axios from "axios";

export default class EmployerUpdateSchema {

    addSchema(schema) {
        return axios.post("http://localhost:8080/api/employerUpdateSchemas/add", schema)
    }
    getAllSchemas() {
        return axios.get("http://localhost:8080/api/employerUpdateSchemas/getAll");
    }

}