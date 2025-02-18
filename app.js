const apiKey = "04c35731a5ee918f014970082a0088b1";
const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imgpath = "https://image.tmdb.org/t/p/w1280";

async function getMovies() {
  const response = await fetch(apiUrl);
  const responseData = await response.json();

  console.log(responseData);

  responseData.results.forEach((movie) => {
    const img = document.createElement("img");
    img.src = imgpath + movie.poster_path;

    document.body.appendChild(img);
  });

  return responseData;
}

getMovies();
