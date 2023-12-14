interface ApiResponse<T> {
  msg: string;
  data?: T;
  error?: string;
}

const response = <T>(msg: string, data?: T, error?: string): ApiResponse<T> => {
  return { msg, data, error };
};

export default response;
