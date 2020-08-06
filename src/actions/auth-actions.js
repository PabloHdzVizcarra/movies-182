import { types } from "../types/types";

export const actionSetActiveUser = ({ email, emailVerified, displayName, uid }) => ({
  type: types.setActiveUser,
  payload: {
    email,
    emailVerified,
    displayName,
    uid,
  },
});
