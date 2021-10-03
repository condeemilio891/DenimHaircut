import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu, Typography } from '@mui/material'
import { MdShoppingCart } from 'react-icons/md'
import useStyles from "./styles"
import logo from "../../assets/images/jackalope.png"
const StoreNavbar = ({totalItems}) => {

    const classes= useStyles()

    return (
        <>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography varient="h6" className={classes.title} color= "inherit">
                    <img src={logo} alt="jackalope" height="25px" className={classes.image}/>
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="show cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <MdShoppingCart/>

                        </Badge>
                    </IconButton>
                </div>

            </Toolbar>
            
        </AppBar>
    </>
    )
}

export default StoreNavbar
