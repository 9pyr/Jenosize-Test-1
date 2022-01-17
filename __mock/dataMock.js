const users = [
  {
    id: 1,
    name: 'Johnson Walker',
    position: 'Graphic Designer',
    company: 'True Cob',
  },
  {
    id: 2,
    name: 'James Hames',
    position: 'Developer',
    company: 'Ail',
  },
  {
    id: 3,
    name: 'Somsak Sukjai',
    position: 'Graphic Designer',
    company: 'BitHup',
  },
  {
    id: 4,
    name: 'Somsuk Sabayjai',
    position: 'Graphic Designer',
    company: 'Mata What ?',
  },
  {
    id: 5,
    name: 'Dekdee Meesuk',
    position: 'Graphic Designer',
    company: 'BiNance',
  },
]

const posts = [
  {
    id: 1,
    user_id: 1,
    detail: `post 1`,
    update_date: '2022-01-10 12:00',
  },
  {
    id: 2,
    user_id: 5,
    detail: `post 2`,
    update_date: '2022-01-11 12:00',
  },
  {
    id: 3,
    user_id: 2,
    detail: `post 3`,
    update_date: '2022-01-12 12:00',
  },
  {
    id: 4,
    user_id: 4,
    detail: `post 4`,
    update_date: '2022-01-13 12:00',
  },
  {
    id: 5,
    user_id: 3,
    detail: `post 5`,
    update_date: '2022-01-14 12:00',
  },
  {
    id: 6,
    user_id: 2,
    detail: `post 6`,
    update_date: '2022-01-15 12:00',
  },
  {
    id: 7,
    user_id: 1,
    detail: `post 7`,
    update_date: '2022-01-16 12:00',
  },
  {
    id: 8,
    user_id: 5,
    detail: `post 8`,
    update_date: '2022-01-17 12:00',
  },
  {
    id: 9,
    user_id: 4,
    detail: `post 9`,
    update_date: '2022-01-18 12:00',
  },
]

const comments = [
  {
    id: 1,
    post_id: 1,
    user_id: 2,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-19 12:00',
  },
  {
    id: 2,
    post_id: 3,
    user_id: 1,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-20 12:00',
  },
  {
    id: 3,
    post_id: 1,
    user_id: 4,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-20 12:00',
  },
  {
    id: 4,
    post_id: 5,
    user_id: 3,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-21 12:00',
  },
  {
    id: 5,
    post_id: 4,
    user_id: 1,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-21 12:00',
  },
  {
    id: 6,
    post_id: 4,
    user_id: 2,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-25 12:00',
  },
  {
    id: 7,
    post_id: 2,
    user_id: 5,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-23 12:00',
  },
  {
    id: 8,
    post_id: 1,
    user_id: 3,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-23 12:00',
  },
  {
    id: 9,
    post_id: 3,
    user_id: 2,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-26 12:00',
  },
  {
    id: 10,
    post_id: 6,
    user_id: 2,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-25 12:00',
  },
  {
    id: 11,
    post_id: 8,
    user_id: 3,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-28 12:00',
  },
  {
    id: 12,
    post_id: 4,
    user_id: 1,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-30 12:00',
  },
  {
    id: 13,
    post_id: 9,
    user_id: 5,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-22 12:00',
  },
  {
    id: 14,
    post_id: 6,
    user_id: 4,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-20 12:00',
  },
  {
    id: 15,
    post_id: 6,
    user_id: 4,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-19 12:00',
  },
  {
    id: 16,
    post_id: 8,
    user_id: 3,
    comments_detail:
      'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ',
    update_date: '2022-01-18 12:00',
  },
]
const likes = [
  { id: 1, post_id: 1, user_id: 2 },
  { id: 2, post_id: 3, user_id: 1 },
  { id: 3, post_id: 1, user_id: 4 },
  { id: 4, post_id: 5, user_id: 3 },
  { id: 5, post_id: 4, user_id: 1 },
  { id: 6, post_id: 4, user_id: 2 },
  { id: 7, post_id: 2, user_id: 5 },
  { id: 8, post_id: 1, user_id: 3 },
  { id: 9, post_id: 3, user_id: 2 },
  { id: 10, post_id: 6, user_id: 2 },
  { id: 11, post_id: 8, user_id: 3 },
  { id: 12, post_id: 4, user_id: 1 },
  { id: 13, post_id: 9, user_id: 5 },
  { id: 14, post_id: 6, user_id: 4 },
  { id: 15, post_id: 6, user_id: 4 },
  { id: 16, post_id: 8, user_id: 3 },
]

const points = []
const diamonds = []

const dataMock = { users, posts, comments, likes, points, diamonds }
export default dataMock
