const NoteReducer = (state, action) => {
    switch (action.type){
        case 'GET_NOTES':
            return {
                ...state,
                notes: action.payload
            }

        case 'GET_NOTE':
            return {
                ...state,
                note: action.payload
            }
        default:
            return state
    }
}

export default NoteReducer

// export default function (state, action) {
//     const {payload, action} = action
// }