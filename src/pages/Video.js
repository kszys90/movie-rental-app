import React from 'react'
import ContentContainer from '../components/ContentContainer'
import { Header } from '../components/Header/Header'
import PageContainer from '../components/PageContainer'
import Title from '../components/Title'

export const Video = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <div style={{ marginTop: '20px' }}>
          <Title size={'big'}>
            We are sorry!
            <br />
            This is a demo site and does not contain any videos.
          </Title>
        </div>
        <div style={{ width: '80%', background: 'black', height: '500px', margin: '20px auto 0 auto', border: '2px solid lightgrey' }}></div>
        <div style={{ width: '80%', background: 'lightgrey', height: '25px', margin: '0 auto 0 auto', border: '2px solid lightgrey' }}></div>
      </ContentContainer>
    </PageContainer>
  )
}
