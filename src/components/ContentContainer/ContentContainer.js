import TopNavigation from '../TopNavigation/TopNavigation';
import { PostsDummyData as PostsData } from '../../constants/data';
import Post from './Post';
const ContentContainer = () => {
  console.log(PostsData);
  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
        {PostsData &&
          PostsData.length !== 0 &&
          PostsData.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default ContentContainer;
