// import * as usersService from '../../../services/users';
// import Immutable from 'seamless-immutable'
import key from 'keymaster';


export default {
  namespace: 'event',
  state: {
    asqList: [],
  },
  reducers: {
    add(state, action) {
      const ac = action
      return { ...state, cumulate: state.cumulate + ac.payload.add };
      // debugger
      /* return Immutable.set(
        state,
        'cumulate',
        state.cumulate + add,
      ); */
    },
    rehydrate(state, { payload: { cumulate } }) {
      return { ...state, cumulate }
    },
  },
  effects: {

  },
  subscriptions: {
  },
};
