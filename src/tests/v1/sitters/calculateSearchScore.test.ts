import { calculateSearchScore } from "../../../api/v1/sitters/application/calculateSearchScore.app";

// 0 => profileScore
test('calculate-search-score-without-stay', () => {
  const profileScore = 3
  const ratingScore = 0
  const stayCount = 0
  expect(calculateSearchScore(profileScore, ratingScore, stayCount)).toBe(profileScore);
})

// 1-9 => avg(profileScore, ratingScore)
test('calculate-search-score-with-5stays', () => {
  const profileScore = 3
  const ratingScore = 6
  const stayCount = 5
  expect(calculateSearchScore(profileScore, ratingScore, stayCount)).toBe(4.5);
})

// >10 => rating
test('calculate-search-score-with-14stays', () => {
  const profileScore = 3
  const ratingScore = 7
  const stayCount = 14
  expect(calculateSearchScore(profileScore, ratingScore, stayCount)).toBe(ratingScore);
})