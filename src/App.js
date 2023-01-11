import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Background from './components/Background/Background'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { Cart } from './pages/Cart'
import Page404 from './pages/Page404'
import { SearchResults } from './pages/SearchResults'
import { Video } from './pages/Video'
import { PageMovieInfo } from './pages/PageMovieInfo'

function App () {
  return (
    <Background>
      <Routes>
        <Route
          path={'/'}
          element={<Navigate
            replace
            to={'/home'}
                   />}
        />
        <Route
          path={'/home'}
          element={<Home />}
        >
          <Route
            path={':searchedPhrase'}
            element={<SearchResults />}
          />
        </Route>
        <Route
          path={'/movies'}
          element={<Movies />}
        />
        <Route
          path={'/:imdbID'}
          element={<PageMovieInfo />}
        />
        <Route
          path={'/cart'}
          element={<Cart />}
        />
        <Route
          path={'/watch'}
          element={<Video />}
        />
        <Route
          path={'*'}
          element={<Navigate
            replace
            to={'/404'}
                   />}
        />

        <Route
          path={'/404'}
          element={<Page404 />}
        >
        </Route>
      </Routes>
    </Background>
  )
}

export default App
