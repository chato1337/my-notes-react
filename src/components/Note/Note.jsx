import React from 'react'
import './noteStyle.scss'
import {BiEdit} from 'react-icons/bi'
import { FiTrash2 } from "react-icons/fi";
import { connect } from 'react-redux';
import {setNote, setModal} from '../../context/NoteActions'

const Note = (props) => {
    const {_id, title, body, footer, modal} = props
    const handleClick = () => {
        props.setNote({
            _id: _id,
            title: title,
            body: body,
            footer: footer
        })
        props.setModal(!modal)
    }
    return (
        <div className="note bg-normal">
            <BiEdit onClick={() => handleClick()} className="edit-icon" size={24} />
            <FiTrash2 className="trash-icon" size={22} />
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

const mapDispatchToProps = {
    setNote,
    setModal
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
