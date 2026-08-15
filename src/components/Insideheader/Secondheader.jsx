import React from 'react'
import { Foodheader } from './Foodheader'
import { Outlet } from 'react-router'

export const Secondheader = () => {
  return (
    <>
    <Foodheader></Foodheader>
    <Outlet></Outlet>
    </>
  )
}
