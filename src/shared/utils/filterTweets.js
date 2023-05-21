const filterTweets = ({ tweets = [], followings = [], filter = 'all' }) => {
  switch (filter) {
    case 'follow':
      return tweets.filter(item => !followings.includes(item.id));
    case 'following':
      return tweets.filter(item => followings.includes(item.id));
    default:
      return tweets;
  }
};
export default filterTweets;
