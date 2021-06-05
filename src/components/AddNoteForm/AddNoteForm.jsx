import axios from 'axios';
import React, {useRef} from 'react'
import {Backend} from '../../constants/MainCostants'

const AddNoteForm = () => {
    const noteTitle = useRef(null)
    const noteBody = useRef(null);
    
    const handleSubmit = () => {
        console.log(noteTitle.current.value, noteBody.current.value);
        const newNote = {
					title: noteTitle.current.value,
					body: noteBody.current.value,
                    footer: 'chatuzPark'
				};
        axios.post(Backend.API_URL+Backend.ROUTES.addNoteUrl, newNote)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }

    return (
			<div>
				<input ref={noteTitle} type="text" placeholder="note title" />
				<textarea ref={noteBody} id="" cols="30" rows="10"></textarea>
				<button onClick={() => handleSubmit()}>crear nota!</button>
			</div>
		);
}

export default AddNoteForm
