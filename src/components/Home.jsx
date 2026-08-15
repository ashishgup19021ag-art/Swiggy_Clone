import React from 'react'
import Grocerygrid from './Grocerygrid'
import Foodrecomend from './Foodrecomend'
import { Header } from './Header'
import Dineout from './Dineout'

export const Home = () => {
  return (
    <>
    <Header></Header>
    <Foodrecomend></Foodrecomend>
    <Grocerygrid></Grocerygrid>
    <Dineout></Dineout>
    </>
  )
}
