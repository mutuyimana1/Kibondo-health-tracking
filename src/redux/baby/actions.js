import { babyAction } from "./index";
import { getAllBabiesService } from "./services";

export const getAllBabiesAction = () => async (dispatch) => {
  dispatch(babyAction.setIsFetching(true));
  try {
    const res = await getAllBabiesService();
    if (res?.status === 200) {
      dispatch(babyAction.setIsFetching(false));
      dispatch(babyAction.setbaby(res?.data));
    }
    dispatch(babyAction.setIsFetching(false));
  } catch (error) {
    console.log("error from action" + error);
  }
};
