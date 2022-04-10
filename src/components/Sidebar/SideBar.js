import React from 'react';

import SideBarIcon from './SideBarIcon';
import Divider from './Divider';
import { sideBarIconData as sideBarList } from '../../constants/data';

const SideBar = () => {
  return (
    <div className='absolute top-0 left-0 h-screen w-16 m-0 flex flex-col items-center bg-white dark:bg-gray-900 shadow-lg'>
      {sideBarList.map((item, index) => (
        <React.Fragment key={item.id}>
          <SideBarIcon icon={item.icon} text={item.text} />
          {(index === 0 || index === 3) && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
