import {createStore,compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browerHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

