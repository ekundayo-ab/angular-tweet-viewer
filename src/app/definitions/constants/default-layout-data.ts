const getDateToday = () => {
  const dateToday = (new Date()).toLocaleDateString();
  return dateToday.split('/').reverse().join('-');
};

const getLastTwoYears = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 2);
  return date.toLocaleDateString().split('/').reverse().join('-');
};

export const DefaultLayoutData = {
  skinTheme: 'default',
  numberOfTweets: 30,
  tweetRangeFrom: getLastTwoYears(),
  tweetRangeTo: getDateToday(),
  firstOrder: 'makeschool',
  secondOrder: 'newsycombinator',
  thirdOrder: 'ycombinator'
};
