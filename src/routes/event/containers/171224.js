import React from 'react';
import { connect } from 'dva';
import { get } from 'lodash';
// import { translate } from 'react-i18next';

import Sample from '../components/event';
import { makeMultiedCounter } from '../models/selector'

// 通过装饰器传递命名空间，使用t function将命名空间内的key对应翻译文案统一传入msgs
// @translate('sample')
@connect(mapStateToProps)
class Container extends React.Component {
  render() {
    return <Sample {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    // loadingSample: get(state, 'loading.models.sample'),
    // multiedCounter: makeMultiedCounter(state),
  };
}

export default Container;
