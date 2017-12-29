import React from 'react';
import { LocaleProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';

function AdminLayout({ children }) {
  return (
    <LocaleProvider locale={zhCN}>
      <div>
        {children}
      </div>
    </LocaleProvider>
  )
}

export default AdminLayout
