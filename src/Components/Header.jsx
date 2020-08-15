import React from 'react';
import routes from '../Routes';
import { Link } from 'react-router-dom';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

const _items = [
  {
    key: 'newItem',
    text: 'New',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Add' },
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          text: 'Email message',
          iconProps: { iconName: 'Mail' },
          ['data-automation-id']: 'newEmailButton', // optional
        },
        {
          key: 'calendarEvent',
          text: 'Calendar event',
          iconProps: { iconName: 'Calendar' },
        },
      ],
    },
  },
  {
    key: 'upload',
    text: 'Upload',
    iconProps: { iconName: 'Upload' },
    href: 'https://developer.microsoft.com/en-us/fluentui',
  },
  {
    key: 'share',
    text: 'Share',
    iconProps: { iconName: 'Share' },
    onClick: () => console.log('Share'),
  },
  {
    key: 'download',
    text: 'Download',
    iconProps: { iconName: 'Download' },
    onClick: () => console.log('Download'),
  },
];
const Header = () => (
  <div>
    <CommandBar
      items={_items}
      ariaLabel="Use left and right arrow keys to navigate between commands"
    />
    <ul className="nav">
      {routes.map((route, i) => (
        <li key={i}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Header;
