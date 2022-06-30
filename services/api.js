import axios from "axios";

const API_PATH = "";

export const get = (apiEndpoint, params) => {
  return axios
    .get(API_PATH + apiEndpoint, { params })
    .then(response => {
      return response;
    })
    .catch(error => {
      const status = { status: error.response.data.status || false };

      return status;
    });
};

export const post = (apiEndpoint, payload, config) => {
  return axios
    .post(API_PATH + apiEndpoint, payload, config)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw err.response.data.errors;
    });
};

export const put = (apiEndpoint, payload) => {
  return axios.put(API_PATH + apiEndpoint, payload).then(response => {
    return response.data;
  });
};

export const deleteMethod = (apiEndpoint, payload) => {
  return axios.delete(API_PATH + apiEndpoint, payload).then(response => {
    return response.data;
  });
};

export const patch = (apiEndpoint, payload) => {
  return axios.patch(API_PATH + apiEndpoint, payload).then(response => {
    return response.data;
  });
};
