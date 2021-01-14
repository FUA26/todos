import { makeStyles, Paper } from '@material-ui/core'
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import StageList from '../../components/organismes/StageList'
import { setProjectList, setTodoDatas } from '../../config/redux/actions'
import './mainPage.scss'

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


const MainPage = () =>{
    const {todoDatas, todoLogin} = useSelector(state =>state.mainReducer)
    const dispatch = useDispatch()
    useEffect(() => {
      console.log('Load Awal 1')
         dispatch(setTodoDatas(1))
         dispatch(setProjectList())
    }, [dispatch])
    const classes = useStyles();
    return (
      <div className="StageWrapper">
          {todoLogin ? <StageList className="items"></StageList> :  todoDatas.map(list =>(<StageList key={list.id} title={list.title} todos={list.todos} className="items"></StageList>))}
      </div>
    )
}

export default (MainPage)
