import React, { FC } from 'react'
import { Note } from '../Models/note.model'

interface INotesListProps{
    notes: Note[]
}

const NotesList:FC<INotesListProps> = (props) => {
  return (
    <div>
      <h2 className="mt-3">Notes</h2>
    </div>
  )
}

export default NotesList
