import React from 'react'
import { render } from 'react-dom'
import Root from './root'
import { Provider } from 'react-redux'
import store from './store/store'

const root = document.getElementById('root');

render(
    <Provider store={ store }>
        <Root />
    </Provider>, root);