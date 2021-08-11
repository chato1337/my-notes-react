import React from 'react'
import { connect } from 'react-redux'
import AddNote from '../AddNote/AddNote'
import AddNoteForm from '../AddNoteForm/AddNoteForm'
import Note from '../Note/Note'
import './noteListStyle.scss'

const NoteList = (props) => {
    const {notes} = props

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

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps)(NoteList)