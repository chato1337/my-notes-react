import axios from 'axios'
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getNotes} from '../../context/NoteActions'
import Note from '../Note/Note'

const NoteList = (props) => {
    const {notes} = props
    useEffect(async () => {
        const res = await axios.get("https://young-escarpment-43192.herokuapp.com/");
        // setNoteState(res.data)
        props.getNotes([...res.data])
    }, [])
    console.log(notes)
    return (
        <div>
            {notes.map(note => {
                return (
                    <Note key={note._id} {...note} />
                )
            })}
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