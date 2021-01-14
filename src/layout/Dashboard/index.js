import { makeStyles, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect,useSelector,useDispatch} from 'react-redux'
import Header from '../../components/organismes/Header'
import Navbar from '../../components/organismes/Navbar'
import { setProjectList, setTodoDatas } from '../../config/redux/actions'
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
      paddingTop: 20,
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
      overflow: 'auto'
    }
  }));


const Dashboard = (props) =>{
    const {children} = props;
    const {todoDatas, todoLogin} = useSelector(state =>state.mainReducer)
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(setTodoDatas(1))
         dispatch(setProjectList())
    }, [dispatch])
    const classes = useStyles();
    return (
        <div>
            <Header onMobileNavOpen={() => setMobileNavOpen(true)}/>
            <Navbar
              onMobileClose={() => setMobileNavOpen(false)}
              openMobile={isMobileNavOpen}
            />
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
        // <div>
        //     <Header></Header>
        //     <Navbar></Navbar>
            // <div className="StageWrapper">
            //     {todoLogin ? <StageList className="items"></StageList> :  todoDatas.map(list =>(<StageList key={list.id} title={list.title} todos={list.todos} className="items"></StageList>))}
            // </div>
        // </div>
    )
}



export default (Dashboard)
