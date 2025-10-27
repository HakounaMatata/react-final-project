import { useState } from "react";

const NotesCard = () => {
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState("normal");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() === "") return;
    const newNote = { id: Date.now(), text: note, priority };
    setNotes([...notes, newNote]);
    setNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Notes</h2>

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note"
        className="border p-2 w-full mb-3 rounded"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      >
        <option value="normal">Normal</option>
        <option value="important">Important</option>
        <option value="delayed">Delayed</option>
      </select>

      <button
        onClick={addNote}
        className="w-full bg-blue-500 text-white p-2 rounded mb-3"
      >
        Add Note
      </button>

      <div>
        <h3 className="text-lg font-semibold">Notes List</h3>
        <ul>
          {notes.map((note) => (
            <li
              key={note.id}
              className="mb-3 flex justify-between items-center"
            >
              <span>
                {note.text} - {note.priority}
              </span>{" "}
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 ml-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesCard;
