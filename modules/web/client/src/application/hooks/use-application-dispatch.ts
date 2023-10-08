import { useDispatch } from 'react-redux'
import { ApplicationDispatch } from '@src/application'

export function useApplicationDispatch() {
  return useDispatch<ApplicationDispatch>()
}
