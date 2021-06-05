import axios from 'axios'
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getNotes} from '../../context/NoteActions'
import AddNote from '../AddNote/AddNote'
import AddNoteForm from '../AddNoteForm/AddNoteForm'
import Note from '../Note/Note'
import './noteListStyle.scss'
import {Backend} from '../../constants/MainCostants'

const NoteList = (props) => {
    const {notes} = props
    useEffect(async () => {
        const res = await axios.get(Backend.API_URL);
        // setNoteState(res.data)
        props.getNotes([...res.data])
    }, [])
    console.log(notes)
    return (
        <div className="note-list">
            {notes.map(note => {
                return (
                    <Note key={note._id} {...note} />
                )
            })}
            <AddNoteForm />
            <AddNote />
        </div>
    )
}

const mapDispatchToProps = {
    getNotes
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteList)