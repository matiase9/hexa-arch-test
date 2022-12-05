import { calculateRatingScore } from "../../../api/v1/sitters/application/calculateRatingScore.app";

test('calculate-rating-score', () => {
  const listRatings = [
    {rating: 1},
    {rating: 5},
    {rating: 6},
    {rating: 2}
  ]
  expect(calculateRatingScore(listRatings)).toBe(3.5);
})

test('calculate-rating-score-without-value', () => {
  const listRatings = []
  expect(calculateRatingScore(listRatings)).toBe(0);
})

test('calculate-rating-score-with-error', () => {
  const listRatings = [
    {rating: 1},
    {rating: 'a'},
    {rating: 6},
    {rating: 2}
  ]
  expect(calculateRatingScore(listRatings)).toBe(NaN);
})
