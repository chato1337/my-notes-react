import axios from "axios";
import {Backend} from "../constants/MainCostants"

class NoteService {
    static getNotes() {
        return axios.get(Backend.API_URL)
            .then(res => res.data)
    }

    static createNote(newNote) {
        return axios.post(Backend.API_URL+Backend.ROUTES.addNoteUrl, newNote)
            .then(res => window.location.reload())
            .then(err => console.log(err))
    }
}

export default NoteService