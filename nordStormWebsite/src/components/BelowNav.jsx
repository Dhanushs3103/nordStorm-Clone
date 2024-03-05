import React from 'react'
import { Flex, Spacer } from '@chakra-ui/react'


// local imports
import Sale from './subComponents/Sale'
import Women from './subComponents/Women'
import Men from './subComponents/Male'
import Kids from './subComponents/Kids'
import Designer from './subComponents/Designer'
import Shoes from './subComponents/Shoes'
import Accessories from './subComponents/Accessories'
import Home from './subComponents/Home'
import Beauty from "./subComponents/Beauty"
import Gifts from "./subComponents/Gifts"

export default function BelowNav() {
  return (
    <>
  <Flex justifyContent={"center"} gap={"65px"} mt={"10px"} >
    <Sale/>
    <Women/>
    <Men/>
    <Kids/>
    <Designer/>
    <Shoes/>
    <Accessories/>
    <Home/>
    <Beauty/>
    <Gifts/>
  </Flex>
    </>
  )
}
