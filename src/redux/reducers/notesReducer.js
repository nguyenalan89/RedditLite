const DEFAULT_STATE = {
  notes: [],
  newNote: '',
};

const notesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'NOTES_SET_NEW_NOTE':
      return {
        ...state,
        newNote: action.newNote
      }
    case 'NOTES_SET_NOTES':
      return {
        ...state,
        notes: action.notes
      }
    default:
      return state;
  }
};

export default notesReducer;
