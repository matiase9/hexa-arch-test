import { sortBySearchScore } from "./sortBySearchScore.app"

export async function mapSitters(data) {
  const sortData = await sortBySearchScore(data)

  return await sortData.map(sitter => {
    const exportModel = {
      'email': sitter.sitter_email,
      'name': sitter.sitter,
      'profile_score': sitter.profile_score,
      'ratings_score': sitter.ratings_score,
      'search_score': sitter.search_score
    }
    return exportModel
  })
}