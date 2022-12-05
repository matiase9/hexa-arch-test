// 0 => profileScore
// 1-9 => avg(profileScore, ratingScore)
// >10 => rating
export const calculateSearchScore = (profileScore, ratingScore, stayCount) => {
  if (stayCount === 0) {
    return profileScore
  }
  if (stayCount > 0 && stayCount < 10) {
    return (profileScore + ratingScore) / 2
  } else {
    return ratingScore
  }
}