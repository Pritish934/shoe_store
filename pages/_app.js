import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{setProgress(40)})
    router.events.on('routeChangeComplete', ()=>{setProgress(100)})
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      localStorage.clear()
    }

    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query])

  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
  }
  const saveCart = (myCart) => {
    let sbt = 0
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      sbt += myCart[keys[i]].price * myCart[keys[i]].qty;

    }

    localStorage.setItem("cart", JSON.stringify(myCart))
    setSubTotal(sbt)
  }

  const addToCart = (itemCode, name, price, qty, varient, size) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { itemCode, name, price, qty: 1, varient, size }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode, name, price, qty, varient, size) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }

    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const buyNow = (itemCode, name, price, qty, varient, size) => {
    let newCart = { itemCode: { name, itemCode, price, qty: 1, varient, size } }
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
    setSubTotal(0)
  }
  return <>
    <Navbar logout={logout} key={key} user={user} subTotal={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} clearCart={clearCart}  {...pageProps} />
  </>

}

export default MyApp
