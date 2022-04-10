import TopNavigation from '../TopNavigation/TopNavigation';
import { PostsDummyData as PostsData } from '../../constants/data';
import Post from './Post';
import BottomBar from './BottomBar';

const ContentContainer = () => {
  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
        {PostsData &&
          PostsData.length !== 0 &&
          PostsData.map((post) => <Post key={post.id} post={post} />)}
      </div>
      <BottomBar />
    </div>
  );
};

export default ContentContainer;
