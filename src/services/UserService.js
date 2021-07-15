import axios from "axios"
import { Backend } from "../constants/MainCostants"

export class UserService {
    static createUser = user => {
        return axios.post(Backend.API_URL+Backend.ROUTES.addUserUrl, user)
            .then(res => window.location.reload())
    }
}