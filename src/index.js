import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(faStroopwafel, fab, far)


ReactDOM.render(<App />, document.getElementById('root'));
