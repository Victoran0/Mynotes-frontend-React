import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

const NotePage = (props) => {
    let {id} = useParams();
    let [note, setNote] = useState(null);
    const navigate = useNavigate();
    let changeMode = props.lightMode ? "dark": "";

    useEffect(()=>{
        getNotes()

    }, [id])

    let getNotes = async ()=>{
        if (id === 'new') return
        let response = await fetch(`http://notesappp.pythonanywhere.com/api/notes/${id}/`)
        let data = await response.json()
            setNote(data)
    }

    let createNote = async () => {
        fetch(`http://notesappp.pythonanywhere.com/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        fetch(`http://notesappp.pythonanywhere.com/api/notes/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`http://notesappp.pythonanywhere.com/api/notes/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }

    let handleSubmit = ()=>{
        if (id !== 'new' && note.body === "") {
            deleteNote()
        } else if (id !== 'new') {
            updateNote()
        } else if (id === 'new' && note.body !== null) {
            createNote()
        }
        navigate('/')
    }

    let handleChange = (value) => {
        setNote(note => ({...note, body: value}))
    }

    return (
    <main className={`note ${changeMode}`}>
        <div className="note-header">
            <h3>
                <ArrowLeft onClick={handleSubmit} />
            </h3>
            {id !== 'new' ? (
                <button onClick={deleteNote}>Delete</button>
            ): <button onClick={handleSubmit} >Done</button> }
        </div>
        <textarea onChange={(e)=>{handleChange(e.target.value)}} value={note?.body}></textarea>
    </main>
    )
}

export default NotePage

