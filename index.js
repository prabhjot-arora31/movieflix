const API_KEY = "fafef439971c0bedf1c12e7a5be971c2";

var movie_youtube=[
"https://youtu.be/ZlNFpri-Y40",
"https://youtu.be/TnGl01FkMMo"
]

const api =
  "https://api.themoviedb.org/3/movie/popular/?api_key=fafef439971c0bedf1c12e7a5be971c2";
var container;

var res = fetch("https://api.themoviedb.org/3/movie/popular/?api_key=fafef439971c0bedf1c12e7a5be971c2")
  .then((res1) => res1.json())
  .then((data1) => {
    var data2 = data1.results;
    data2.map((re) => {
      var main = document.getElementsByClassName("main");
      var name = document.createElement("h1");
      var release_date = document.createElement("h5");
      container = document.createElement("div");
      //   var adult = document.createElement("h5");
      var img = document.createElement("img");
      var btn = document.createElement("button");
      var a = document.createElement("a");
      //   container styling
      container.style.marginTop="1.1rem";
      container.style.border = "1px solid white";
      container.style.padding = "1.3rem";
      container.style.margin = "0.6rem";
      container.style.borderRadius = "0.6rem";
      container.style.width = "20rem";
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
      btn.textContent = "Watch trailer";
      btn.style.alignSelf = "center";
      btn.style.marginTop = "0.6rem";
      btn.style.padding = "0.6rem";
      btn.style.backgroundColor = "blue";
      btn.style.color = "white";
      btn.style.cursor = "pointer";
      //   <a> things
      a.style.textDecoration = "none";
//a.href=movie_youtube[0];
      a.appendChild(btn);
      container.appendChild(name);
      container.appendChild(release_date);
      //   container.appendChild(adult);
      container.appendChild(img);
      container.appendChild(a);
      main[0].appendChild(container);
      console.log(re.title);
    });
  });
