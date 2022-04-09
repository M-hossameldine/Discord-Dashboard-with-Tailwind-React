import { v4 as uuid } from 'uuid';

import Dropdown from './Dropdown';

const Channels = [
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

const ChannelBar = () => {
  return (
    <div className='channel-bar shadow-lg'>
      <ChannelBlock />
      <div className='channel-container'>
        {Channels.map((channel) => (
          <Dropdown
            key={channel.id}
            channelTitle={channel.title}
            selections={channel.selections}
          />
        ))}
      </div>
    </div>
  );
};

const ChannelBlock = () => {
  return (
    <div className='channel-block'>
      <h5 className='channel-block-text'> Channels </h5>
    </div>
  );
};

export default ChannelBar;
