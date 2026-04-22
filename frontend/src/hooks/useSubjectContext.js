import { useContext } from 'react'
import { SubjectContext } from '../context/subjectContext'

export const useSubjectContext = () => {
  const context = useContext(SubjectContext)

  if (!context) {
    throw Error(
      'useSubjectContext must be used inside a SubjectContextProvider'
    )
  }

  return context
}
