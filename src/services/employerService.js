import axios from "axios";
export default class EmployerService {

    getEmployers() {
        return axios.get("http://localhost:8080/api/employers/getall");
    };
    getEmployerById(id) {
        return axios.get(`http://localhost:8080/api/employers/getById?id=${id}`);
    }
    selectEmployers() {
        return axios.get("http://localhost:8080/api/employers/selectEmployers");
    }
    updateEmployerEmail(email, id) {
        return axios.put(`http://localhost:8080/api/employers/updateEmail?email=${email}&id=${id}`);
    };
    updateEmployerPassword(id, password, passwordRepeat) {
        return axios.put(`http://localhost:8080/api/employers/updatePassword?id=${id}&password=${password}3&passwordRepeat=${passwordRepeat}`)
    };
    updateEmployerPhoneNUumber(id, phoneNumber) {
        return axios.put(`http://localhost:8080/api/employers/updatePhone?id=${id}&phone=${phoneNumber}`)
    };
    updateEmployerWebAdress(id, phoneNumber) {
        return axios.put(`http://localhost:8080/api/employers/updateWebAdress?id=${id}&webAdress=${phoneNumber}`);
    };
};