import React from 'react'

const Note = ({title, body}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Note
