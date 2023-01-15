import { registerAction } from "./index";
import { registerService, loginService } from "./services";

export const registerUserAction = (data) => async (dispatch) => {
  dispatch(registerAction.setIsFetching(true));
  try {
    const res = await registerService(data);
    if (res?.status === 200) {
      dispatch(registerAction.setIsFetching(false));
      dispatch(registerAction.setRegister(res?.data));
    }
    dispatch(registerAction.setIsFetching(false));
  } catch (error) {
    console.log("error from action" + error);
  }
};
export const loginUserAction = (data) => async (dispatch) => {
  dispatch(registerAction.setIsFetching(true));
  try {
    const res = await loginService(data);
    if (res?.status === 200) {
      dispatch(registerAction.setIsFetching(false));
      dispatch(registerAction.setRegister(res?.data));
    }
    dispatch(registerAction.setIsFetching(false));
    dispatch(registerAction.setRegister(res?.data));
  } catch (error) {
    console.log("error from action" + error);
  }
};
