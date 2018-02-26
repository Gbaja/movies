export const directoryRequest = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=5d091ecac9e2f169b67b9d1a11ff3d73&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2018`
  )
    .then(res => {
      if (res.status !== 200) {
        console.log("Something went wrong with the request");
      }
      return res.json();
    })
    .catch(err => {
      throw new Error("Fetching failed");
    });
};
