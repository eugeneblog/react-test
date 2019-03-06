import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import App from './views/App.jsx'

// import appstate from './store/app.state.js'

// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.hydrate(<App />, document.getElementById('root'))
const rootNode = document.getElementById('root')
const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <BrowserRouter>
                <Component/>
            </BrowserRouter>
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