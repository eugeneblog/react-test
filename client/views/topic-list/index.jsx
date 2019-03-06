import React from 'react'
import { inject, observer } from 'mobx-react'
/**
 * 使用 @inject 给组件注入其需要的 store（利用 React context 机制）
 * 通过 @observer 将 React 组件转化成响应式组件
 */

@inject('appState')  @observer
class TopicList extends React.Component {
    constructor() {
        super() // super关键字用于访问和调用一个对象的父对象上的函数。
        this.changeName = this.changeName.bind(this)
    }
    changeName (event) {
        this.props.appState.name = event.target.value
    }
    render () {
        return (
            <div>
                <input type="text" onChange={ this.changeName }/>
                { this.props.appState.name } Say Number: { this.props.appState.count }
            </div>
        )
    }
}

export default TopicList