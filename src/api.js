const API_URL = "/api/todos/";

export async function getTodos() {
  return fetch(API_URL).then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = { errorMessage: data.message };
          throw err;
        });
      } else {
        let err = {
          errorMessage:
            "Oops. Seems like there is a problem. Please try again later"
        };
        throw err;
      }
    }
    return resp.json();
  });
}

export async function createTodo(value) {
  return fetch(API_URL, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ name: value })
  }).then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = { errorMessage: data.message };
          throw err;
        });
      } else {
        let err = {
          errorMessage:
            "Oops. Seems like there is a problem. Please try again later"
        };
        throw err;
      }
    }
    return resp.json();
  });
}

export async function updateTodo(data) {
  const updateURL = API_URL + data._id;
  return fetch(updateURL, {
    method: "put",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ completed: !data.completed })
  }).then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = { errorMessage: data.message };
          throw err;
        });
      } else {
        let err = {
          errorMessage:
            "Oops. Seems like there is a problem. Please try again later"
        };
        throw err;
      }
    }
    return resp.json();
  });
}

export async function deleteTodo(id) {
  const deleteURL = API_URL + id;
  return fetch(deleteURL, {
    method: "delete"
  }).then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = { errorMessage: data.message };
          throw err;
        });
      } else {
        let err = {
          errorMessage:
            "Oops. Seems like there is a problem. Please try again later"
        };
        throw err;
      }
    }
  });
}
