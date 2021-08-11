import React, {useRef, useState, useEffect} from 'react'
import NoteService from '../../services/NoteService';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './addNoteForm.scss'
import { connect } from 'react-redux';
import { setModal, setNote, getNotes } from '../../context/NoteActions';

const AddNoteForm = (props) => {
    const {modal, note, getNotes} = props
    const noteTitle = useRef(null)
    const noteBody = useRef(null);
    const color = useRef(null)
    const [formState, setFormState] = useState(false)
    
    useEffect(() => {
        // console.log(note)
        // console.log(noteTitle.current.value)
        if(note && note._id){
            setFormState(true)
            noteTitle.current.value = note.title
            noteBody.current.value = note.body
            color.current.value = note.color
        }else {
            setFormState(false)
        }
    }, [modal])

    const handleClose = () => {
        props.setModal(!modal)
        //move to constant
        const resetNote = {
            _id: null,
            title: "",
            body: "",
            footer: "",
            color: "normal"
        }
        props.setNote(resetNote)

        noteTitle.current.value = ""
        noteBody.current.value = ""
        color.current.value = ""
    }

    const handleSubmit = async () => {
        if (formState) {
            console.log('modo edicion!')
            //conectar con el api
            const editedNote = {
                _id: note._id,
                title: noteTitle.current.value,
                body: noteBody.current.value,
                color: color.current.value,
                footer: 'chatuzPark'
            }
            await NoteService.editNote(editedNote)
            const noteList = await NoteService.getNotes()
            getNotes(noteList)
            handleClose()
        }else {
            console.log(noteTitle.current.value, noteBody.current.value);
            const newNote = {
                        title: noteTitle.current.value,
                        body: noteBody.current.value,
                        color: color.current.value,
                        footer: 'chatuzPark'
                    };
            await NoteService.createNote(newNote);
            const noteList = await NoteService.getNotes()
            getNotes(noteList)
            handleClose()
        }
    }

    // console.log(note)

    return (
			<div className={modal ? "form-container" : "form-container hide"}>
				<div className="add-note-form">
					<AiOutlineCloseCircle onClick={() => handleClose()} size={22} />
					<h2>{ formState ? 'editar nota' : 'crear nota' }</h2>
					<input ref={noteTitle} defaultValue={note.title} type="text" placeholder="note title" />
					<textarea
						ref={noteBody}
                        defaultValue={note.body}
						placeholder="note body"
						cols="30"
						rows="10"
					></textarea>
                    <label htmlFor="">color note:</label>
                    <select ref={color} defaultValue={note.color}>
                        <option value="normal">normal</option>
                        <option value="yellow">yellow</option>
                        <option value="green">green</option>
                        <option value="orange">orange</option>
                    </select>
					<button onClick={() => handleSubmit()}>guardar</button>
				</div>
			</div>
		);
}

const mapDispatchToProps = {
    setModal,
    setNote,
    getNotes
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
        note: state.note
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);
