import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  createTheme,
  Customizations,
  Fabric,
  initializeIcons,
} from '@fluentui/react';

// Initialize icons in case this example uses them
initializeIcons();

const myTheme = createTheme({
  palette: {
    themePrimary: '#e30004',
    themeLighterAlt: '#fef4f4',
    themeLighter: '#fbd2d3',
    themeLight: '#f7adae',
    themeTertiary: '#ee5f62',
    themeSecondary: '#e61c1f',
    themeDarkAlt: '#cc0003',
    themeDark: '#ac0003',
    themeDarker: '#7f0002',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },
});
const Content = () => {
  Customizations.applySettings({ theme: myTheme });
  return (
    <Fabric applyThemeToBody>
      <App />
    </Fabric>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
