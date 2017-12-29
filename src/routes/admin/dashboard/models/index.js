import queryString from 'query-string'
import AV from 'leancloud-storage'

export default {
  namespace: 'dashboard',
  state: {
    asqs: [],
  },
  reducers: {
    saveAsqs(state, { asqs = [] }) {
      return { ...state, asqs };
    },
  },
  effects: {
    * fetchAsqs(action, { call, select, put }) {
      try {
        const asqQuery = new AV.Query('Asq')
        const asqs = yield asqQuery.find();
        // const { data: gameTypes } = yield call(mockServices.getGameTypes);
        yield put({
          type: 'saveAsqs',
          asqs,
        })
      } catch (error) {
        console.error(error);
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/admin/dashboard') {
          dispatch({ type: 'fetchAsqs' });
        }
      });
    },
  },
};
