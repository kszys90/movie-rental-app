import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import CartItemsContainer from '../components/CartItemsContainer'
import ContentContainer from '../components/ContentContainer'
import ContentHeaderContainer from '../components/ContentHeaderContainer/ContentHeaderContainer'
import { Header } from '../components/Header/Header'
import NavLink from '../components/NavLink'
import PageContainer from '../components/PageContainer'
import renderCartItem from '../components/renderCartItem'
import Title from '../components/Title'
import { buyItemAction, removeFromCartAction } from '../state/user'

export const Cart = () => {
  const variant = useSelector(state => state.variant.variant)
  const currentBalance = useSelector(state => state.user.balance)
  const currentCart = useSelector(state => state.user.cart)
  const [totalPrice, setTotalPrice] = React.useState(0)
  const dispatch = useDispatch()
  React.useEffect(() => {
    setTotalPrice(0)
    currentCart.map(({ Price }) => setTotalPrice(prevPrice => Number(prevPrice) + Number(Price)))
  }, [currentCart])
  function removeClick (id) {
    dispatch(removeFromCartAction(id))
  }
  function buyAllClick () {
    if (window.confirm('Do you want to buy selected products? Your balance will be reduced by the value of the products. Do you want to continue? ')) {
      if (currentBalance >= totalPrice) {
        currentCart.forEach(item => {
          const data = {
            Title: item.Title,
            imdbID: item.imdbID,
            Year: item.Year,
            Type: item.Type,
            Poster: item.Poster
          }
          dispatch(buyItemAction(data, item.Price))
        })
      } else { window.alert('Your balance is insufficient. Please add funds and try again') }
    }
  }
  const mediaMatch = window.matchMedia('(max-width: 600px)')
  const [matches, setMatches] = React.useState(mediaMatch.matches)
  mediaMatch.onchange = (e) => {
    setMatches(e.matches)
  }
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <ContentHeaderContainer variant={variant}>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ minHeight: matches ? 0 : '85px', display: 'flex', alignItems: 'center' }}>
              <Title size={matches ? 'big' : 'huge'}>Your Cart</Title>
            </div>
            <div >
              <div>
                <Title size={'verySmall'}>Balance:</Title>
              </div>
              <div>
                <Title size={matches ? 'small' : 'big'}>{currentBalance} $</Title>
              </div>
            </div>
          </div>
        </ContentHeaderContainer>
        <CartItemsContainer>
          {currentCart && currentCart.length > 0 ?
            <>
              {currentCart.map((item) => renderCartItem(item, variant, removeClick, matches))}
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: matches ? 'center' : 'auto' }}>
                {matches ? null : <div style={{ flexBasis: '60%' }}></div>}
                <div style={{ flexBasis: matches ? 'auto' : '40%' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }} ><Title size={'big'}>Total price: {totalPrice}$</Title></div>
                  <div style={{ display: 'flex', justifyContent: 'center', height: '55px' }} >
                    <Button
                      onClick={buyAllClick}
                      custom={'buyNow'}
                    >
                      Buy now!
                    </Button>
                  </div>
                </div>
              </div>
            </>
            :
            <div style={{ width: '100%', textAlign: 'center' }}>
              <NavLink
                to={'/'}
                variant={variant}
              >Cart is empty. Search movies and add to cart
              </NavLink>
            </div>
            }
        </CartItemsContainer>
      </ContentContainer>
    </PageContainer>
  )
}
