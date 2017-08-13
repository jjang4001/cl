import {combineReducers} from 'redux';

import count from './count';
import commands from './commands';

export default combineReducers({
  count,
  commands
});
