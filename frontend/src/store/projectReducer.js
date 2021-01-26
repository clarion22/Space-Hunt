
const LOAD = 'projects/LOAD';

//actions

const load = list => ({
  type: LOAD,
  list,
})

export const getProjects = () => async dispatch => {
  const response = await fetch(`https://pixabay.com/api/?key=20010415-a6682cfb4ce63170711548b9b&q=yellow+flowers&image_type=photo`)

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
}


const projectReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD:
      const allProjects = {};
      action.list.forEach(project => {
        allProjects[project.id] = project;
      });
      return {
        ...allProjects,
        ...state,
      }
  }
}
