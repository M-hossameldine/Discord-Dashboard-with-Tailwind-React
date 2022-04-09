import { useState } from 'react';

import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const Dropdown = ({ channelTitle, selections }) => {
  const [expanded, setExpanded] = useState(true);

  const dropdownExpandHandler = () => {
    setExpanded((expanded) => !expanded);
  };

  const dropdownTitleClasses = expanded
    ? 'dropdown-header-text-selected'
    : 'dropdown-header-text';

  return (
    <div className='dropdown'>
      {/* drowdown header */}
      <div className='dropdown-header' onClick={dropdownExpandHandler}>
        <ChevronIcon expanded={expanded} />
        <h5 className={dropdownTitleClasses}> {channelTitle} </h5>
        <FaPlus
          size='12'
          className='text-accent text-opacity-80 my-auto ml-auto'
        />
      </div>

      {/* drowdown body */}
      {expanded &&
        selections &&
        selections.length > 0 &&
        selections.map((selection) => (
          <TopicSelection key={selection} selection={selection} />
        ))}
    </div>
  );
};

const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection'>
    <BsHash size='24' className='text-gray-400' />
    <h5 className='dropdown-selection-text'>{selection}</h5>
  </div>
);

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';

  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};

export default Dropdown;
