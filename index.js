const API_KEY = "fafef439971c0bedf1c12e7a5be971c2";

var movie_youtube = [
  "https://youtu.be/ZlNFpri-Y40",
  "https://youtu.be/TnGl01FkMMo",
];

const api =
  "https://api.themoviedb.org/3/movie/popular/?api_key=fafef439971c0bedf1c12e7a5be971c2";
var container;
// container.onmouseover = () => {
//   container.style.backgroundColor = "white";
//   container.style.color = "black";
// };
var overview = "Overview";
var res = fetch(
  "https://api.themoviedb.org/3/movie/popular/?api_key=fafef439971c0bedf1c12e7a5be971c2"
)
  .then((res1) => res1.json())
  .then((data1) => {
    var data2 = data1.results;
    data2.map((re) => {
      var main = document.getElementsByClassName("main");
      var name = document.createElement("h1");
      var release_date = document.createElement("h5");
      var hidDiv = document.createElement("div");
      var img = document.createElement("img");
      var btn = document.createElement("button");
      var ratingButton = document.createElement("button");
      var flexDiv = document.createElement("div");
      var a = document.createElement("a");
      // flexDiv property
      flexDiv.style.display = "flex";
      flexDiv.style.justifyContent = "space-between";
      flexDiv.style.alignItems = "center";
      // rating button
      ratingButton.textContent = "Rating";
      ratingButton.style.alignSelf = "center";
      ratingButton.style.marginTop = "0.6rem";
      ratingButton.style.padding = "0.6rem";
      ratingButton.style.backgroundColor = "blue";
      ratingButton.style.color = "white";
      ratingButton.style.cursor = "pointer";

      // hidDiv property
      hidDiv.style.display = "none";
      hidDiv.style.marginTop = "0.6rem";
      hidDiv.style.textAlign = "center";
      // hidDiv.width = "100%";
      container = document.createElement("div");
      //   container styling
      container.style.border = "1px solid white";
      container.style.padding = "1.3rem";
      container.style.margin = "0.6rem";
      container.style.borderRadius = "0.6rem";
      container.style.width = "20em";
      container.style.boxShadow = "5px 5px 8px #5463FF";
      // container hover things
      // container.addEventListener("mouseover", () => {
      //   container.style.boxShadow = "5px 5px 8px white";
      // });
      // container.addEventListener("mouseout", () => {
      //   container.style.boxShadow = "5px 5px 8px #5463FF";
      // });
      //   container.style.cursor = "pointer";
      name.innerHTML = re.title + "<br/>";
      release_date.innerHTML = "Release Date: " + re.release_date;
      //   adult = "Adult: " + re.adult;
      //   heading things
      name.style.textAlign = "center";
      //   release date things
      release_date.style.margin = "0.7rem";
      release_date.style.fontSize = "0.9rem";
      //   adult things
      //   adult.style.margin = "0.7rem";
      //   adult.style.fontSize = "0.7rem";
      //   image things
      img.src = "https://image.tmdb.org/t/p/original" + re.poster_path;
      img.alt = "Image of Movies";
      img.style.width = "100%";
      //   button things
      btn.textContent = overview;
      btn.style.alignSelf = "center";
      btn.style.marginTop = "0.6rem";
      btn.style.padding = "0.6rem";
      btn.style.backgroundColor = "blue";
      btn.style.color = "white";
      btn.style.cursor = "pointer";
      //   <a> things
      a.style.textDecoration = "none";
      // overview logic
      a.addEventListener("click", () => {
        hidDiv.innerHTML = "<b>Overview : </b>" + re.overview;
        if (btn.textContent == "Overview") {
          hidDiv.style.display = "block";
          btn.textContent = "Hide";
          ratingButton.textContent = "Rating";
        } else {
          btn.textContent = "Overview";
          hidDiv.style.display = "none";
        }
        console.log(hidDiv.textContent);
      });
      // rating logic
      ratingButton.addEventListener("click", () => {
        hidDiv.innerHTML = "<b>Rating: </b>" + re.vote_average;
        if (ratingButton.textContent == "Rating") {
          hidDiv.style.display = "block";
          ratingButton.textContent = "Hide";
          btn.textContent = "Overview";
        } else {
          ratingButton.textContent = "Rating";
          hidDiv.style.display = "none";
        }
        console.log(hidDiv.textContent);
      });
      //a.href=movie_youtube[0];
      a.appendChild(btn);
      flexDiv.appendChild(a);
      flexDiv.appendChild(ratingButton);
      container.appendChild(name);
      container.appendChild(release_date);
      //   container.appendChild(adult);
      container.appendChild(img);
      container.appendChild(flexDiv);
      container.appendChild(hidDiv);
      main[0].appendChild(container);
      console.log(re.title);
    });
  });
