


import React,{useState} from 'react'
import Collections from '../components/Collections'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Womencollections from '../components/Womencollections'


import {Gents , Ladies} from '../data'
import Footer from '../components/Footer'

const Mainpage = () => {

    const [gentsFashion,setGentsFashion] =useState(Gents)
    
    const [ladiesFashion,setLadiesFashion] =useState(Ladies)
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <Womencollections ladiesFashion={ladiesFashion} />  
      <Footer />
    </div>
  )
}

export default Mainpage
