import '@testing-library/jest-dom';
import { actionSetActiveUser } from '../../actions/auth-actions';
import { types } from '../../types/types';

describe('Test in actions', () => {
  
  test('actions must work', () => {

    const userActive = {
      email: 'example@test.com',
      emailVerified: true,
      displayName: 'pablo',
      uid: 'a1b2'
    }

    const callAction = actionSetActiveUser(userActive);
    
    expect(callAction).toEqual({
      type: types.setActiveUser,
      payload: {
        ...userActive
      }
    })
  })
  
})
