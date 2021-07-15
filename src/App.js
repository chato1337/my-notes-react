import React from 'react';
import './App.css';
import NoteList from './components/NoteList/NoteList';
import Main from './layouts/Main';

function App() {
  return (
    <div className="App">
      <Main>
        <NoteList />
      </Main>
    </div>
  );
}

export default App;
