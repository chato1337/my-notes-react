import React, {useRef, useState, useEffect} from 'react'
import NoteService from '../../services/NoteService';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './addNoteForm.scss'
import { connect } from 'react-redux';
import { setModal, setNote } from '../../context/NoteActions';

const AddNoteForm = (props) => {
    const {modal, note} = props
    const noteTitle = useRef(null)
    const noteBody = useRef(null);
    const [formState, setFormState] = useState(false)
    
    useEffect(() => {
        if(note._id){
            setFormState(true)
        }else {
            setFormState(false)
        }
    }, [modal])

    const handleSubmit = () => {
        if (formState) {
            console.log('modo edicion!')
            //conectar con el api
            const editedNote = {
                _id: note._id,
                title: noteTitle.current.value,
                body: noteBody.current.value,
                footer: 'chatuzPark'
            }
            NoteService.editNote(editedNote)
            props.setModal(!modal)
        }else {
            console.log(noteTitle.current.value, noteBody.current.value);
            const newNote = {
                        title: noteTitle.current.value,
                        body: noteBody.current.value,
                        footer: 'chatuzPark'
                    };
            NoteService.createNote(newNote);
            props.setModal(!modal)
        }
    }

    const handleClick = () => {
        props.setModal(!modal)
        //move to constant
        const resetNote = {
            _id: null,
            title: "",
            body: "",
            footer: ""
        }
        props.setNote(resetNote)
    }

    console.log(note)


    return (
			<div className={modal ? "form-container" : "form-container hide"}>
				<div className="add-note-form">
					<AiOutlineCloseCircle onClick={() => handleClick()} size={22} />
					<h2>{ formState ? 'editar nota' : 'crear nota' }</h2>
					<input ref={noteTitle} defaultValue={note.title} type="text" placeholder="note title" />
					<textarea
						ref={noteBody}
                        defaultValue={note.body}
						placeholder="note body"
						cols="30"
						rows="10"
					></textarea>
					<button onClick={() => handleSubmit()}>guardar</button>
				</div>
			</div>
		);
}

const mapDispatchToProps = {
    setModal,
    setNote
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
        note: state.note
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);
