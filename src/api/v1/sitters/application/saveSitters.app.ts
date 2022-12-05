import { getSitterMemory } from '../infrastructure/sitters.memory';
import Sitters from '../model';
import {calculateProfileScore} from './calculateProfileScore.app';
import {calculateRatingScore} from './calculateRatingScore.app';
import {calculateSearchScore} from './calculateSearchScore.app';


function prepareSitters(sittersJson) {
  let duplicated = [];
  let sitterList = [];
  sittersJson.map(stay => {
    if (!duplicated.includes(stay.sitter_email)) {
      const staysBySitter = sittersJson.filter(sitter => sitter.sitter_email === stay.sitter_email)
      const stayModel = staysBySitter.map(stayObject => {
        return {
          'rating': stayObject.rating,
          'start_date': stayObject.start_date,
          'owner_email': stayObject.owner_email,
          'text': stayObject.text
        }
      })
      
      const profileScore = calculateProfileScore(stay.sitter);
      const ratingScore = calculateRatingScore(stayModel);
      const searchScore = calculateSearchScore(profileScore, ratingScore, stayModel.length);

      const newModel = {
        'sitter_email': stay.sitter_email,
        'sitter': stay.sitter,
        'sitter_phone_number': stay.sitter_phone_number,
        'profile_score': profileScore.toFixed(2),
        'ratings_score': ratingScore.toFixed(2),
        'search_score': searchScore.toFixed(2),
        'stay_list': stayModel
      }
      duplicated.push(stay.sitter_email)
      sitterList.push(newModel)
    }

  })

  return sitterList;
}


export async function saveSitters(listSitters) {
  const dataSitters = prepareSitters(listSitters)

  // I didn't add try-catch because I save in the local memory
  const sitters = dataSitters.map(sitterObject => {
    const sitter = new Sitters(sitterObject)
    const memory = getSitterMemory()
    memory.writeMemo(sitter)
    return sitter;
  })
  return sitters;
}