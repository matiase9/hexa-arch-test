// distinct letters
export const calculateProfileScore = (name: any) => {
  const withOutSameLetters = name.toLowerCase().split('').filter(function (x, n, s) {
    return s.indexOf(x) == n && x.match(/[a-z]/i)
  }).join("")
  return withOutSameLetters.length
}