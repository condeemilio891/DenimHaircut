
import React, {useState} from 'react'
import SideBar from "../../Components/SideBar"
import NavBar from "../../Components/NavBar"
import HeroSection from '../../Components/HeroSection'
import InfoSection from "../../Components/InfoSection"
import TourDates from '../../Components/TourDates'
import VideoCardSection from '../../Components/VideoSection'
import { homeObjOne } from '../../Components/InfoSection/Data'
import { tourRouterData } from '../../Components/TourDates/Data'
import { videoRouter} from '../../Components/VideoSection/Data'

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
        <VideoCardSection {...videoRouter}/>
        <TourDates {...tourRouterData}/>
        </>
    )
}

export default Home

