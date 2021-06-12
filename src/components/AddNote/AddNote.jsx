import React from 'react'
import {IoMdAddCircleOutline} from 'react-icons/io'
import { connect } from 'react-redux'
import {setModal} from '../../context/NoteActions'
import './addNoteStyles.scss'

const AddNote = (props) => {
    const {modal} = props

    const handleClick = () => {
        props.setModal(!modal)
    }
    return (
        <div onClick={() => handleClick()} className="add-note">
            <IoMdAddCircleOutline size={64} />
        </div>
    )
}

const mapDispatchToProps = {
    setModal
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
