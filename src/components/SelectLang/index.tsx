import { Menu } from 'antd';
import { getLocale, setLocale } from 'umi';
import React from 'react';
import classNames from 'classnames';
import { GlobalOutlined } from '@ant-design/icons';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

const SelectLang = props => {
  const { className } = props;
  const selectedLang = getLocale();
  const changeLang = ({ key }) => setLocale(key);
  const locales = ['vi-VN', 'en-US'];
  const languageLabels = {
    'en-US': 'English',
    'vi-VN': 'Vietnamese',
  };
  const languageIcons = {
    'en-US': '🇬🇧',
    'vi-VN': 'vi',
  };
  const langMenu = (
    <Menu
      className={styles.menu}
      selectedKeys={[selectedLang]}
      onClick={changeLang}
    >
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div
      style={{
        float: 'right',
        padding: '0 20px'
      }}
    >
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <GlobalOutlined title="lang" />
        </span>
      </HeaderDropdown>
    </div>
  );
};

export default SelectLang;