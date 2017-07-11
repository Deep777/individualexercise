import React from 'react'
import ReactDOM from 'react-dom'
//import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker';

import Root from './components/Roots'
import './index.css'

//injectTapEventPlugin()

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker();
