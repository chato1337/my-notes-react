import axios from "axios";
import {Backend, Methods} from "../constants/MainCostants"

class NoteService {
    static getNotes() {
        return axios.get(Backend.API_URL)
            .then(res => res.data)
    }

    static createNote(newNote) {
        return axios.post(Backend.API_URL+Backend.ROUTES.addNoteUrl, newNote)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    static editNote(note) {
        return axios.put(Backend.API_URL+Backend.ROUTES.editNoteUrl, note)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    static deleteNote(note) {
        return axios.delete(Backend.API_URL+Backend.ROUTES.deleteNoteUrl, {data: note})
        .then(response => Methods.refreshApp())
        .catch(err => console.log(err))
    }
}

export default NoteService