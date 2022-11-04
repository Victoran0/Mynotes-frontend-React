import React, {useState, useEffect} from 'react'
import ListItem from '../components/listItem'
import AddButton from '../components/AddButton';


const NoteLIstPage = (props) => {
    let changeMode = props.lightMode ? "dark": "";

    let [notes, setNotes] = useState([])

    useEffect(()=> {
        getNotes()
    }, [])

    let getNotes = async () =>{
        let response = await fetch('http://notesappp.pythonanywhere.com/api/notes/')
        let data = await response.json()
        setNotes(data)

    }

    return (
        <main className={`notes ${changeMode}`}>
            <div className="notes-header">
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((note, index) =>(
                    <ListItem key={index} note={note} />
                ))}
            </div>
            <AddButton />
        </main>
    )
}

export default NoteLIstPage
