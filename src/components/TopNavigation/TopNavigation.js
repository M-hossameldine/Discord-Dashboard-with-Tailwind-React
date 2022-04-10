import { useState } from 'react';

import Icons from '../../constants/icons';
const { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun } = Icons;

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <SearchBar />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const modeHandler = () => {};

  return (
    <span onClick={modeHandler}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

const SearchBar = () => {
  return (
    <div className='search'>
      <input type='text' className='search-input' placeholder='Search...' />
      <FaSearch size='18' className='text-secondary my-auto' />
    </div>
  );
};

const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => (
  <FaUserCircle size='24' className='top-navigation-icon' />
);
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text'>tailwind-css</h5>;

export default TopNavigation;
