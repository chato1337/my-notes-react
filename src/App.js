import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import NoteList from './components/NoteList/NoteList';
import Main from './layouts/Main';
import { getNotes } from './context/NoteActions'
import NoteService from './services/NoteService';

function App({ getNotes, notes }) {
  
  const loadData = async () => {
    const noteList = await NoteService.getNotes()
    getNotes([...noteList])
  }
  
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="App">
      <Main>
        {
          Object.keys(notes).length > 0 ?
            <NoteList />
            :
            'loading...'
        }
      </Main>
    </div>
  );
}

const mapDispatchToProps = {
  getNotes
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
