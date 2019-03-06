import React from 'react'
import { inject, observer } from 'mobx-react'
import { AppState } from '../../store/app.state.js'
/**
 * 使用 Provider 组件用来包裹最外层组件节点，并且传入 store（通过）context 传递给后代组件
 * 使用 @inject 给组件注入其需要的 store（利用 React context 机制）
 * 通过 @observer 将 React 组件转化成响应式组件
 */

@inject('appState')  @observer
class TopicList extends React.Component {
    render () {
        return (
            <div>Number: { this.props.appState.count }</div>
        )
    }
}

export default TopicList