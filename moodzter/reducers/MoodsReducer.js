import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: [],
    possible: ['positive','negative'],
  };

  const moodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state
    }
  };

  export default combineReducers({
    moods: moodReducer,
  });