import { Component } from 'react';
import { Text, View } from '@tarojs/components';
import Header from './header';

import 'taro-react-table/dist/index.css';
import './index.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Header></Header>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
