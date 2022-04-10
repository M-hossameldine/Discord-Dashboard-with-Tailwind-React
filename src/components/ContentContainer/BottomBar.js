import Icons from '../../constants/icons';

const { BsPlusCircleFill } = Icons;

const BottomBar = () => {
  return (
    <div className='bottom-bar'>
      <PlusIcon />
      <input
        type='text'
        placeholder='Enter Message...'
        className='bottom-bar-input'
      />
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default BottomBar;
