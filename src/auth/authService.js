import { browserHistory } from 'react-router';


export function requireAuth(nextState, transition) {
  console.log("tteste")
  var num = false
  if (!num) {
    transition.to('/sign_in');
  }
}
