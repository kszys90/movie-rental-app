import React from 'react'
import { useDebounce } from 'react-use'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PageContainer from '../components/PageContainer'
import ContentContainer from '../components/ContentContainer'
import Title from '../components/Title'
import ContentHeaderContainer from '../components/ContentHeaderContainer'
import SearchInput from '../components/SearchInput'
import { Header } from '../components/Header/Header'

export const Home = () => {
  const { searchedPhrase } = useParams()
  const navigate = useNavigate()
  const [searchVal, setSearchVal] = React.useState('')
  const variant = useSelector(state => state.variant.variant)
  const [state, setState] = React.useState('Typing stopped')
  const [debouncedValue, setDebouncedValue] = React.useState(searchedPhrase)

  const [, cancel] = useDebounce(() => {
    setState('Typing stopped')
    setDebouncedValue(searchVal)
  }, 1000, [searchVal])

  React.useEffect(() => {
    if (debouncedValue === searchedPhrase) { return cancel() }
    navigate(debouncedValue.replaceAll('/', ''))
  }, [cancel, debouncedValue, navigate, searchedPhrase])

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <ContentHeaderContainer variant={variant}>
          <Title size={'big'}>What do You want to watch?
          </Title>
          <SearchInput
            value={searchVal}
            change={(value) => setSearchVal(value)}
            changeState={() => setState('Waiting for typing to stop...')}
          />
        </ContentHeaderContainer>
        {state !== 'Waiting for typing to stop...' ? null : <p>The search will start automatically in a moment...</p> }
        {state === 'Typing stopped' && debouncedValue === undefined ?
          // to do: items slider with recommended vids
          null
          :
          <Outlet />
        }

      </ContentContainer>
    </PageContainer>
  )
}
