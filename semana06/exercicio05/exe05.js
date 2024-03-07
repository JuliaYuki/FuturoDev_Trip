fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((response) => response.json())
  .then((images) => {
    images.forEach((image) => {
      document.write(`<img src='${image.url}' width='200'/> <br />`);
    });
  })
  .catch((error) => console.error("Erro ao buscar imagens:", error));
