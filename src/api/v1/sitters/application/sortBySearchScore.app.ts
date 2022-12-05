export async function sortBySearchScore(data) {
  return data.sort(function (a, b) {
    return b.search_score - a.search_score;
  })
}