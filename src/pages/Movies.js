/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'
import ContentContainer from '../components/ContentContainer'
import { Header } from '../components/Header/Header'
import PageContainer from '../components/PageContainer'
import renderMovie from '../components/renderMovie'

export const Movies = () => {
  const variant = useSelector(state => state.variant.variant)
  const movies = useSelector(state => state.user.movies)
  const navigate = useNavigate()

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        {movies ? movies.map((movie) => renderMovie(movie, variant, movies, null, navigate)) : null}
      </ContentContainer>
    </PageContainer>
  )
}
