import { Discuss } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Discuss
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#01460d"
    />
  );
};
