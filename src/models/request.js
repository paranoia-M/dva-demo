function req(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    });
}

export default req;
