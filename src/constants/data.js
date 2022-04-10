import { v4 as uuid } from 'uuid';

import icons from './icons';

const { BsPlus, BsFillLightningFill, BsGearFill, FaFire, FaPoo } = icons;

export const ChannelData = [
  { id: uuid(), title: 'Topics', selections: ['Tailwind-css', 'React'] },
  {
    id: uuid(),
    title: 'Questions',
    selections: ['jit-compilation', 'purge-files', 'dark-mode'],
  },
  { id: uuid(), title: 'Random', selections: ['variants', 'plugins'] },
  { id: uuid(), title: 'Random', selections: ['variants', 'plugins'] },
  { id: uuid(), title: 'Random', selections: ['variants', 'plugins'] },
  { id: uuid(), title: 'Random', selections: ['variants', 'plugins'] },
  { id: uuid(), title: 'Random', selections: ['variants', 'plugins'] },
  { id: uuid(), title: 'Random', selections: ['variants', 'plugins'] },
];

export const sideBarIconData = [
  { icon: <BsPlus size={28} />, text: 'tooltip', id: uuid() },
  { icon: <BsFillLightningFill size={32} />, text: 'tooltip', id: uuid() },
  { icon: <BsGearFill size={20} />, text: 'tooltip', id: uuid() },
  { icon: <FaFire size={20} />, text: 'tooltip', id: uuid() },
  { icon: <FaPoo size={22} />, text: 'tooltip', id: uuid() },
];

export const PostsDummyData = [
  {
    id: uuid(),
    userName: 'Ada',
    timestamp: 'one week ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: uuid(),
    userName: 'Leon',
    timestamp: 'one week ago',
    text: 'Lorem ipsum dolor. ',
  },
  {
    id: uuid(),
    userName: 'Jill',
    timestamp: '5 days ago',
    text: 'Lorem.',
  },
  {
    id: uuid(),
    userName: 'Ellie',
    timestamp: '4 days ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: uuid(),
    userName: 'Claire',
    timestamp: '2 days ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sitamet consectetur adipisicing elit. Lorem ipsum dolor sit amet consecteturadipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: uuid(),
    userName: 'Albert',
    timestamp: '22 hours ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️',
  },
  {
    id: uuid(),
    userName: 'Rebecca',
    timestamp: '3 hours ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: uuid(),
    userName: 'H.U.N.K',
    timestamp: 'Just now',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];
