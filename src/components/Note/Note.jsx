import React from 'react'
import './noteStyle.scss'
import {BiEdit} from 'react-icons/bi'
import { FiTrash2 } from "react-icons/fi";

const Note = ({title, body}) => {
    return (
        <div className="note bg-normal">
            <BiEdit className="edit-icon" size={24} />
            <FiTrash2 className="trash-icon" size={22} />
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Note
