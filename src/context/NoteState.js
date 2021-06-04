import React, {useState} from 'react'
import { createStore } from 'redux'
import { Provider, useDispatch } from "react-redux"
import axios from 'axios'
import NoteReducer from './NoteReducer'

const initialState = {
    notes: [],
    note: {}
}

const store = createStore(NoteReducer, initialState)


export const NoteState = (props) => {
    const dispatch = useDispatch()
    const getNotes = async () => {
        const noteList = await axios.get('https://young-escarpment-43192.herokuapp.com/')
        dispatch({
            type: 'GET_NOTES',
            payload: noteList.data.results
        })
    }
    const getNote = () => {}

    return (
        <Provider
            store={{ 
                NoteList: store.notes,
                Note: store.note
            }}
        >
            {props.chidren}
        </Provider>
    )
}