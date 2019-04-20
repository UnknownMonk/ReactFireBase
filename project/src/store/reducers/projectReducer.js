const initState = {
  projects: [
    { id: '1', title: 'help me find peac', content: 'blah blah blah' },
    { id: '2', title: 'collect stuff', content: 'blah blah blah' },
    { id: '3', title: 'Go do some other stuff', content: 'blah blah blah' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
    default:
      return state;
  }
};

export default projectReducer;
