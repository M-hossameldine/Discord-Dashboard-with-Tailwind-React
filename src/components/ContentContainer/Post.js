import { AVATAR_BASEURL } from '../../constants/api';

const Post = (props) => {
  const { name, timestamp, text } = props.post;
  const seed = Math.round(Math.random() * 100);

  return (
    <div className='post'>
      <div className='avatar-wrapper'>
        <img
          src={`${AVATAR_BASEURL}/${seed}.svg`}
          alt='user avatar'
          className='avatar'
        />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

export default Post;
