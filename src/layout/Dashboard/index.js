import { ClickAwayListener, makeStyles, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect,useSelector,useDispatch} from 'react-redux'
import { setProjectList, setTodoDatas } from '../../config/redux/actions'
import Header from '../../components/organismes/Header'
import Navbar from '../../components/organismes/Navbar'
import {  } from '../../config/redux/actions'
import './dashboard.scss'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      display: 'flex',
      height: '100%',
      overflow: 'hidden',
      width: '100%'
    },
    wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: 64,
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 256
      }
    },
    contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden'
    },
    content: {
      flex: '1 1 auto',
      height: '100%',
      overflow: 'auto',
      padding: 20

    }
  }));


const Dashboard = (props) =>{
    const {children} = props;
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => {
      console.log('Load Awal 1')
         dispatch(setTodoDatas(1))
         dispatch(setProjectList())
    }, [dispatch])
    const handleDrawerClose = () => {
      console.log('hittttt Close')
      dispatch({type:"UPDATE_SIDEBAR",data:false})
    };
    return (
        <div>
            <Header/>
            
        <ClickAwayListener onClickAway={handleDrawerClose}>
            <Navbar/>
        </ClickAwayListener>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        <Paper >
                            {children}
                        </Paper>
                    </div>
                </div>
            </div>
            
      </div>
    )
}



export default (Dashboard)
