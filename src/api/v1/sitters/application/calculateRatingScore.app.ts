// avg of rating
export const calculateRatingScore = (list: any) => {
  if (list.length < 1) {
    return 0
  }
  
  let total = list.reduce((sum, value) => parseFloat(sum) + parseFloat(value.rating), 0.00);
  total = total / list.length
  return parseFloat(total)
}