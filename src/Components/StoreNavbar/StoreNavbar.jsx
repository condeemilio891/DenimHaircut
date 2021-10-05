import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu, Typography } from '@mui/material'
import { MdShoppingCart } from 'react-icons/md'
import {Link, useLocation} from "react-router-dom"
import useStyles from "./styles"
import logo from "../../assets/images/jackalope.png"
const StoreNavbar = ({totalItems}) => {

    const classes= useStyles()
    const location= useLocation();

  
    return (
        <>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/store" varient="h6" className={classes.title} color= "inherit">
                    <img src={logo} alt="jackalope" height="25px" className={classes.image}/>
                </Typography>
                <div className={classes.grow}/>
                {location.pathname ==="/store" && (
                <div className={classes.button}>
                    {/* <Link to="/store/cart">go to cart</Link> */}
                    <IconButton  component={Link} to="store/cart" aria-label="show cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <MdShoppingCart/>

                        </Badge>
                    </IconButton>
                </div>)}

            </Toolbar>
            
        </AppBar>
    </>
    )
}

export default StoreNavbar
