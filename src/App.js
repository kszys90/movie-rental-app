import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'

function App () {
  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        >
          <Route
            path={':searchedPhrase'}
            element={<SearchResults />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
