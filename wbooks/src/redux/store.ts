import { createStore } from 'redux';

import Reactotron from '../../ReactotronConfig';

import reducer from './book/reducer';

export const store = createStore(reducer, Reactotron.createEnhancer());
