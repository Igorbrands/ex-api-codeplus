const api = (config, callback) => {
  var xhr = new XMLHttpRequest();

  xhr.open(config.method, config.url);
  xhr.send(config.method);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);

      callback(data);
    }
  };
};

export default api;

// solução com fetch():
// fetch('./products.json')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console(error));
// };
