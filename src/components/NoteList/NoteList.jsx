import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getNotes} from '../../context/NoteActions'
import AddNote from '../AddNote/AddNote'
import AddNoteForm from '../AddNoteForm/AddNoteForm'
import Note from '../Note/Note'
import './noteListStyle.scss'
import NoteService from '../../services/NoteService'

const NoteList = (props) => {
    const {notes} = props

    useEffect(() => {
        const call = async () => {
            const res = await NoteService.getNotes()
            props.getNotes([...res])
        }
        call()
    }, [])

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