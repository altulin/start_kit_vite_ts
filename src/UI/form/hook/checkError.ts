/* eslint-disable @typescript-eslint/no-explicit-any */
const useCheckError = (meta: any) => {
  const isError = meta.touched && meta.error;
  const error_text = meta.error;

  return { isError, error_text };
};

export default useCheckError;
