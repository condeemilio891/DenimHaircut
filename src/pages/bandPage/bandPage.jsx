
import React, {useState} from 'react'
import SideBar from "../../Components/SideBar"
import NavBar from "../../Components/NavBar"
import HeroSection from '../../Components/HeroSection'
import InfoSection from "../../Components/InfoSection"
import { homeObjOne } from '../../Components/InfoSection/Data'
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
        <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home

