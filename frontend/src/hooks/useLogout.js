import { useAuthContext } from './useAuthContext'
import { useSubjectContext } from './useSubjectContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: subjectDispatch } = useSubjectContext()

  const logout = () => {
    localStorage.removeItem('user')

    dispatch({ type: 'LOGOUT' })
    subjectDispatch({ type: 'SET_SUBJECTS', payload: null })
  }

  return { logout }
}

