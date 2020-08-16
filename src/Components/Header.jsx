import React, { useContext } from 'react';
import routes from '../Routes';
import { Link, useHistory } from 'react-router-dom';
import { CommandBar, SearchBox, Stack } from 'office-ui-fabric-react/lib';
import { AuthContext } from '../App';

const stackTokens = { childrenGap: 20 };
const Header = () => {
  const history = useHistory();

  const items = [
    {
      key: 'dashboard',
      text: 'Dashboard',
      iconProps: { iconName: 'BIDashboard' },
      onClick: () => console.log('dashboard'),
    },
    {
      key: 'newItem',
      text: 'Create',
      cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
      iconProps: { iconName: 'Add' },
      subMenuProps: {
        items: [
          {
            key: 'calendarEvent',
            text: 'Plan',
            iconProps: { iconName: 'Calendar' },
          },
          {
            key: 'Team',
            text: 'Team',
            iconProps: { iconName: 'Group' },
          },
        ],
      },
    },
    {
      key: 'activity',
      text: 'New Activity',
      iconProps: { iconName: 'Running' },
    },

    {
      key: 'report',
      text: 'Reports',
      iconProps: { iconName: 'ReportDocument' },
      onClick: () => history.push('/reports'),
    },
  ];
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Stack tokens={stackTokens}>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png"
              height="50"
            />
          </div>
          <div className="ms-Grid-col ms-sm8">
            <CommandBar
              items={items}
              ariaLabel="Use left and right arrow keys to navigate between commands"
            />
          </div>
          <div className="ms-Grid-col ms-sm3">
            <SearchBox
              placeholder="Search"
              onSearch={(newValue) => console.log('value is ' + newValue)}
            />
          </div>
        </div>
      </div>

      <ul className="nav">
        {routes.map((route, i) => (
          <li key={i}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
        {isLoggedIn && (
          <li>
            <Link to="/reports">Reports</Link>
          </li>
        )}
      </ul>
    </Stack>
  );
};

export default Header;
