import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import React from 'react';

import Root from './components/Root'

render(
<Provider store={store}>
<Root/>
</Provider>,
document.getElementById("app")
);


