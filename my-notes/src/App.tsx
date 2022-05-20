import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Note} from './Models/note.model'
import Header from './Components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './Components/NotesList';
import CreateNotes from './Components/CreateNotes';

// interface Note {
//   id:string,
//   title:string,
//   text:string,
//   color:string,
//   date:string
// }

function App() {

  const [notes,setNotes] = useState<Note[]>([{
    id:(new Date()).toString(),
    title: "Meetings",
    text: " Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date()).toString()
  }])


  return (
    <>
    <Header/>
    <Container className='mt-5'>
      <Row>
        <Col>
        <NotesList notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
