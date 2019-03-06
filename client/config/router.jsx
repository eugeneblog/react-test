import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import TopicList from '../views/topic-list/index.jsx'
import TopicDetail from '../views/topic-detail/index.jsx'

const routerList = [
    {
        path: '/',
        component: () => <Redirect to = "/list"/>,
        exact: true
    }, {
        path: '/list',
        component: TopicList
    }, {
        path: '/detail',
        component: TopicDetail
    }
]

export default () => routerList.map((e, i) => {
    return <Route
    key = {i}
    {...e}
    />
})
