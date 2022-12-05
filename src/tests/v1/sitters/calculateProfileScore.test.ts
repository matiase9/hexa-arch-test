import { calculateProfileScore } from "../../../api/v1/sitters/application/calculateProfileScore.app";

test('calculate-profile-score-basic', () => {
  expect(calculateProfileScore('robert')).toBe(5);
})

test('calculate-profile-score-with-space', () => {
  expect(calculateProfileScore('ro be rt')).toBe(5);
})

test('calculate-profile-score-with-numbers', () => {
  expect(calculateProfileScore('robert123')).toBe(5);
})

test('calculate-profile-score-with-special-characters', () => {
  expect(calculateProfileScore('robert s.')).toBe(6);
})

test('calculate-profile-score-empty', () => {
  expect(calculateProfileScore('')).toBe(0);
})

test('calculate-profile-score-with-special-characters-capital-letter', () => {
  expect(calculateProfileScore('Robert S. Williams')).toBe(11);
})