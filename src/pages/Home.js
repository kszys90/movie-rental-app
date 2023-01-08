import React from 'react'
import { useDebounce } from 'react-use'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeVariantAction } from '../state/variant'

export const Home = () => {
  const { searchedPhrase } = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const variant = useSelector(state => state.variant.variant)

  const [state, setState] = React.useState('Typing stopped')
  const [val, setVal] = React.useState('')
  const [debouncedValue, setDebouncedValue] = React.useState(searchedPhrase)

  const [, cancel] = useDebounce(() => {
    setState('Typing stopped')
    setDebouncedValue(val)
  }, 1000, [val])

  React.useEffect(() => {
    if (debouncedValue === searchedPhrase) { return cancel() }
    navigate(debouncedValue.replaceAll('/', ''))
  }, [cancel, debouncedValue, navigate, searchedPhrase])

  function changeVariant () {
    variant === 'light' ?
      dispatch(changeVariantAction('dark'))
      :
      dispatch(changeVariantAction('light'))
  }

  return (
    <div>
      {/* do zrobienia div jako standardowy container na stronkę */}
      <h1>HOME</h1>
      {/* do zrobienia logo i nav-bar */}
      <div>
        <h4>Search and start watching!</h4>
        <p>Type searched title or phrase</p>
      </div>
      <div>
        <input
          value={val}
          placeholder={''}
          onChange={({ currentTarget }) => {
            setState('Waiting for typing to stop...')
            setVal(currentTarget.value)
          }}
        />
      </div>
      <button onClick={changeVariant}>
        change variant
      </button>
      {state !== 'Waiting for typing to stop...' ? null : <p>The search will start automatically in a moment...</p> }
      {state === 'Typing stopped' && val && val === '' ?
        null
        :
        <div>
          <p>polecane filmy ... moduł do wstawienia wyświetlany jak nie ma wyszukiwań</p>
        </div>
        }
      <Outlet />
    </div>
  )
}
