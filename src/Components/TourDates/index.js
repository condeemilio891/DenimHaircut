import React, {useState} from 'react'
import { ListGroup, ListGroupItem,ListGroupBody,ListGroupDate,ListGroupHeading,HeroBtnWrapper,ArrowForward,ArrowRight } from '../../Components/TourDates/TourDateElements'
import { Button } from '../ButtonElement'

const TourDates = ({id}) => {
   
    const[hover,setHover]= useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
   
   
    return (
        <>
        <ListGroupBody id={id}>
            <ListGroup>
                <ListGroupItem>
                 TourDates
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupDate>Sep 7 2021</ListGroupDate>
                 <ListGroupHeading>The Lost Well</ListGroupHeading>
                 <HeroBtnWrapper>
                    <Button to='about'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Tickets{hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupDate>Sep 7 2021</ListGroupDate>
                 <ListGroupHeading>The Lost Well</ListGroupHeading>
                 <HeroBtnWrapper>
                    <Button to='about'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Tickets{hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupDate>Sep 7 2021</ListGroupDate>
                 <ListGroupHeading>The Lost Well</ListGroupHeading>
                 <HeroBtnWrapper>
                    <Button to='about'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Tickets{hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupDate>Sep 7 2021</ListGroupDate>
                 <ListGroupHeading>The Lost Well</ListGroupHeading>
                 <HeroBtnWrapper>
                    <Button to='about'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Tickets{hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupDate>Sep 7 2021</ListGroupDate>
                 <ListGroupHeading>The Lost Well</ListGroupHeading>
                 <HeroBtnWrapper>
                    <Button to='about'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Tickets{hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupDate>Sep 7 2021</ListGroupDate>
                 <ListGroupHeading>The Lost Well</ListGroupHeading>
                 <HeroBtnWrapper>
                    <Button to='about'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Tickets{hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupDate>Sep 7 2021</ListGroupDate>
                 <ListGroupHeading>The Lost Well</ListGroupHeading>
                 <HeroBtnWrapper>
                    <Button to='about'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Tickets{hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </ListGroupItem>
            </ListGroup>
            </ListGroupBody>
</>
    )
}

export default TourDates
