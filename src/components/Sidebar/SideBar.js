import { v4 as uuid } from 'uuid';
import {
  BsPlus,
  BsFillLightningFill as BsLightning,
  BsGearFill,
} from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

import SideBarIcon from './SideBarIcon';
import Divider from './Divider';
import React from 'react';

const sideBarList = [
  { icon: <BsPlus size={28} />, text: 'tooltip', id: uuid() },
  { icon: <BsLightning size={32} />, text: 'tooltip', id: uuid() },
  { icon: <BsGearFill size={20} />, text: 'tooltip', id: uuid() },
  { icon: <FaFire size={20} />, text: 'tooltip', id: uuid() },
  { icon: <FaPoo size={22} />, text: 'tooltip', id: uuid() },
];

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
