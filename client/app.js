import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './views/App.jsx'

import appState from './store/app.state.js'
import { Provider } from 'mobx-react'

// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.hydrate(<App />, document.getElementById('root'))
const rootNode = document.getElementById('root')
const render = Component => {
    // 使用 Provider 组件用来包裹最外层组件节点，并且传入 store（通过）context 传递给后代组件
    ReactDOM.hydrate(
        <AppContainer>
            <Provider appState = {appState}>
                <BrowserRouter>
                    <Component/>
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        rootNode
    )
}
render(App)

if (module.hot) {
    module.hot.accept('./views/App.jsx', () => {
        const  NextApp = require('./views/App.jsx').default
        // ReactDOM.hydrate(NextApp, document.getElementById('root'))
        render(NextApp)
    })
}