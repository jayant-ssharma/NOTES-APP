
import { useState } from "react"
import LeftSide from "./Component/LeftSide"
import RightSide from "./Component/RightSide"

export type Note = {
  title: string
  description: string
}
const App = () => {
  const [notes, setNotes] = useState<Note[]>([])

  const addNote = (note: Note) => {
    setNotes((currentNotes) => [...currentNotes, note])
  }

  const deleteNote = (indexToDelete: number) => {
    setNotes((currentNotes) => currentNotes.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className="flex min-h-dvh w-full flex-col lg:flex-row bg-black text-white">
      <LeftSide addNote={addNote} />

      <div className="mt-2 h-px w-full lg:w-px lg:h-auto bg-gray-600"></div>

      <RightSide notes={notes} onDelete={deleteNote} />
    </div>
  )
}

export default App