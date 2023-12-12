/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from "./hook";

const useFetchToStore = (axs: () => any, reducer: (arg0: any) => any) => {
  const dispatch = useAppDispatch();

  const fetch = async () => {
    try {
      const response = await axs();
      dispatch(reducer(response.data));
    } catch (error) {
      //
    }
  };

  return fetch;
};

export default useFetchToStore;
