import { ChannelData as Channels } from '../../constants/data';
import Dropdown from './Dropdown';

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
