import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

function getApiDomain() {
  const url = window.location.href.split('/')[2]
  if (url === 'planetradio.co.uk' || url === 'creative.bauermedia.co.uk') {
    return 'https://creative.bauermedia.co.uk/iframe-test/index'
  } else {
    return '/'
  }
}

ReactDOM.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.getElementById('root')
)
