import React, { Component } from 'react'
import { connect } from 'react-redux'
import StageList from '../../components/organismes/StageList'
import './mainPage.scss'



export class MainPage extends Component {
    render() {
        const stage = this.props.stage
        console.log(stage)
        return (
            <div>
                <h1>TODO APP</h1>
                <div className="StageWrapper">
                    {stage.map(list =>(<StageList title={list.title} todos={list.todos} className="items"></StageList>))}
                </div>
            </div>
        )
    }
}

const reduxState = (state) =>({
    stage :state.stage
    
})

export default connect(reduxState)(MainPage)
