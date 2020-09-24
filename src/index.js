import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import configureStore from './store';
import './index.css';
import App from './components/container/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />,
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

