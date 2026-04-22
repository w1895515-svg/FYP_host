import { createContext, useReducer } from 'react'

export const SubjectContext = createContext()

export const subjectsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SUBJECTS':
      return {
        subjects: action.payload
      }
    case 'CREATE_SUBJECT':
      return {
        subjects: [action.payload, ...state.subjects]
      }
    case 'DELETE_SUBJECT':
      return {
        subjects: state.subjects.filter(
          (s) => s._id !== action.payload._id
        )
      }
    default:
      return state
  }
}

export const SubjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(subjectsReducer, {
    subjects: null
  })

  return (
    <SubjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SubjectContext.Provider>
  )
}
