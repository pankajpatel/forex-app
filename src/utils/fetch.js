const baseUrl = "//api.frankfurter.app";

const request = (_url, method = "GET", body = "") => {
  const url = `${baseUrl}${_url}`;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const params = {
    method,
    headers: headers,
  };
  if (["POST", "PUT"].includes(method)) {
    params.body = typeof body !== "string" ? JSON.stringify(body) : body;
  }
  const request = new Request(url, params);

  return fetch(request).then((response) => {
    const { status, headers } = response;
    if (status === 204 || headers.get("Content-Length") === 0) {
      return {};
    }
    return response.json();
  });
};

export const getData = (url) => request(url, "GET");
export const postData = (url, data) => request(url, "POST", data);
export const putData = (url, data) => request(url, "PUT", data);
export const deleteData = (url) => request(url, "DELETE");
