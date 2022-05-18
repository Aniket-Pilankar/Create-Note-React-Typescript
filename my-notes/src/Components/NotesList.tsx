import React, { FC } from 'react'
import { Note } from '../Models/note.model'
import Notes from './Notes'

interface INotesListProps{
    notes: Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList:FC<INotesListProps> = ({notes,setNotes}) => {

  const handleDelete = (id:string) => {
    console.log('id:', id)
    setNotes(notes.filter((e) => {
      return e.id !== id
    }))
  }

  const renderNotes = ():JSX.Element[] => {
   return notes.map(note => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />
    })
  }

  return (
    <div>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </div>
  )
}

export default NotesList
