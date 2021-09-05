

import React, {useState} from 'react'
import SideBar from "../../Components/SideBar"
import NavBar from "../../Components/NavBar"
import HeroSection from '../../Components/HeroSection'

const Home = () => {
    const[isOpen, setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <HeroSection/>
        </>
    )
}

export default Home

