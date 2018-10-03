import React, { Component } from 'react';
import { CreateNote } from "./components/CreateNote";
import { ModifyNote } from "./components/ModifyNote";
import { SimpleNoteList } from './components/SimpleNoteList'
import { AdvancedNoteList } from './components/AdvancedNoteList';
import { Note } from './components/Note';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'Note 1',
          entry: 'Text for note 1',
          tags: ['One ']
        },
        {
          title: 'Note 2',
          entry: 'Text for note 2',
          tags: ['One ', 'Two ']
        },
        {
          title: 'Note 3',
          entry: 'Text for note 3',
          tags: ['One ', 'Two ','three ']
        }
      ],
      filteredNotes: [],
      filterText: '',
      noteList: 'Simple',
      filterMode: 'Title',
      mode: 'View',
      selectedNote: {}
    };
    this.onChangeFilterMode = this.onChangeFilterMode.bind(this);
    this.onSelectCreateMode = this.onSelectCreateMode.bind(this);
    this.onSelectNote = this.onSelectNote.bind(this);
    this.onCreateNote = this.onCreateNote.bind(this);
    this.onModifyNote = this.onModifyNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onChangeNoteList = this.onChangeNoteList.bind(this);
    this.onSelectNoteMode = this.onSelectNoteMode.bind(this);
    this.onChangeFilterField = this.onChangeFilterField.bind(this);
    this.onUpdateFilterField = this.onUpdateFilterField.bind(this);
  }
  componentWillMount() {
    this.setState({
      selectedNote: this.state.notes[0],
      filteredNotes: this.state.notes
    })
  }
  onCreateNote(note) {
    if (note) {
      let newNotes = this.state.notes;
      newNotes.push(note);
      debugger;
      this.setState({
        notes: newNotes,
        mode: 'View'
      });
    }
  }
  onModifyNote(note) {
    if (note) {
      let newNotes = this.state.notes;
      newNotes[newNotes.indexOf(note)] = note;
      this.setState({
        notes: newNotes,
      });
    }
  }
  onChangeFilterMode(e) {
    this.setState({
      filterMode: e.target.value
    });
  }
  onUpdateFilterField(e) {
    if (!e.target.value) {
      let newNotes;
      newNotes = this.state.notes;
      this.setState({
        filteredNotes: newNotes
      });
    }
  }
  onChangeFilterField(e) {
    let newNotes;
    if (!e.target.value) {
      newNotes = this.state.notes;
    }
    else {
      let noteList = this.state.notes;
      let newNotes = [];
      if (this.state.filterMode === 'Tags') {
        newNotes=[];
        noteList.forEach(note => {
          note.tags.forEach(tag => {
            if (tag.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()) && newNotes.indexOf(note)===-1) {
              newNotes.push(note);
            }
          })
        });

      }
      else if (this.state.filterMode === 'Title') {
        newNotes=[];
        noteList.forEach(note => {
          if (note.title.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())) {
            newNotes.push(note);
          }
        })

      }
      this.setState({
        filteredNotes: newNotes
      });
    }
  }
  onSelectNoteMode(e) {
    this.setState({
      mode: e.target.value
    });
  }
  onSelectNote(note) {
    let mode = this.state.mode === 'Modify' ? 'Modify' : 'View';
    this.setState({
      mode: mode,
      selectedNote: note
    });
  }
  onSelectCreateMode(e) {
    this.setState({
      mode: 'Create'
    });
  }
  onDeleteNote() {
    let newNotes = this.state.notes;
    let index = newNotes.indexOf(this.state.selectedNote);
    newNotes.splice(index, 1);
    this.setState({
      notes: newNotes,
      filteredNotes: newNotes,
      selectedNote: newNotes[0]
    });
  }
  onChangeNoteList(e) {
    this.setState({
      noteList: e.target.value
    });
  }
  getField(mode) {
    let field;
    if (this.state.mode === 'Create')
      field = <CreateNote onCreateNote={this.onCreateNote} />;
    else if (this.state.mode === 'View')
      field = <Note note={this.state.selectedNote} />
    else if (this.state.mode === 'Modify')
      field = <ModifyNote onModifyNote={this.onModifyNote} note={this.state.selectedNote} />
    return field;
  }
  getNoteList() {
    let noteList;
    if (this.state.noteList === 'Simple')
      noteList = <SimpleNoteList onSelectNote={this.onSelectNote} notes={this.state.filteredNotes} />
    else if (this.state.noteList === 'Advanced')
      noteList = <AdvancedNoteList onSelectNote={this.onSelectNote} notes={this.state.filteredNotes} />

    return noteList;
  }
  render() {
    let field = this.getField(this.state.mode);
    let noteList = this.getNoteList();
    return (
      <div className='App'>
        <div className='panel-left'>
          <div className='panel-top'>
            <input placeholder='Filter' onKeyUp={this.onUpdateFilterField} onChange={this.onChangeFilterField} className='item-top-justify' />
            <select onChange={this.onChangeFilterMode}>
              <option>Title</option>
              <option>Tags</option>
            </select>
          </div>
          <div className='item-devide'></div>
          {
            noteList
          }
        </div>
        <div className='panel-right'>
          <div className='panel-top'>
            <label for='modeView'>View </label>
            <select id='modeView' onChange={this.onChangeNoteList}>
              <option>Simple</option>
              <option>Advanced</option>
            </select>
            <label for='mode'> Mode </label>
            <select id='mode' onChange={this.onSelectNoteMode}>
              <option>View</option>
              <option>Modify</option>
            </select>
            <button className='item-right' onClick={this.onDeleteNote}>delete</button>
            <button className='item-right' onClick={this.onSelectCreateMode}>Add</button>
          </div>
          <div className='item-devide'></div>
          <div className='item-justify'>
            {
              field
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
