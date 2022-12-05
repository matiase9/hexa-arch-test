import { sortBySearchScore } from "../../../api/v1/sitters/application/sortBySearchScore.app";


test('sort-by-search-score-desc', async() => {
  const listSearchScore = [
    { search_score: 4 },
    { search_score: 1.2 },
    { search_score: 5 },
    { search_score: 2.4 },
  ];
  const listSortDescSearchScore = [
    { search_score: 5 },
    { search_score: 4 },
    { search_score: 2.4 },
    { search_score: 1.2 }
  ]
  const test = await sortBySearchScore(listSearchScore)
  expect(test).toEqual(listSortDescSearchScore);
});