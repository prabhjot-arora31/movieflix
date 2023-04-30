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
      var download = document.createElement("div");
      var download_link = document.createElement("a");
      var name = document.createElement("h1");
      var release_date = document.createElement("h5");
      var hidDiv = document.createElement("div");
      var img = document.createElement("img");
      var btn = document.createElement("button");
      var ratingButton = document.createElement("button");
      var flexDiv = document.createElement("div");
      var a = document.createElement("a");
      var a_for_youtube_url = document.createElement("a");
      // download_link things
      download_link.href =
        "https://movies.goldmies.workers.dev/b77a3e70a9222929b48151cf94af8512224c1b395d6a6cb15ccd1b190cb657c1fc5ffa80f8d6afcdf797dac1e29c5539::2ebdbcf6ff3cb33e2084388cab946bb2/1395899601/The.Super.Mario.Bros.Movie.2023.1080p.HDCAM.English.1XBET.mkv";
      download_link.appendChild(download);
      // a_for_youtube_url property
      a_for_youtube_url.style.textDecoration = "none";
      // ********************************************************
      // if (re.id == 640146)
      //   a_for_youtube_url.href = "https://youtu.be/ZlNFpri-Y40";
      // else if (re.id == 502356)
      //   a_for_youtube_url.href = "https://youtu.be/TnGl01FkMMo";
      // else if (re.id == 594767)
      //   a_for_youtube_url.href = "https://youtu.be/AIc671o9yCI";
      // else if (re.id == 76600)
      //   a_for_youtube_url.href = "https://youtu.be/d9MyW72ELq0";
      // else if (re.id == 948713)
      //   a_for_youtube_url.href = "https://youtu.be/eqCYw_o5lng";
      // else if (re.id == 677179)
      //   a_for_youtube_url.href = "https://youtu.be/AHmCH7iB_IM";
      // else if (re.id == 638974)
      //   a_for_youtube_url = "https://youtu.be/LM2F56uK0fs";
      // else if (re.id == 713704)
      //   a_for_youtube_url = "https://youtu.be/smTK_AeAPHs";
      // else if (re.id == 1048300)
      //   a_for_youtube_url.href = "https://youtu.be/o7nUU7qCYVE";
      // else if (re.id == 315162)
      //   a_for_youtube_url.href = "https://youtu.be/RqrXhwS33yc";
      // else if (re.id == 603692)
      //   a_for_youtube_url.href = "https://youtu.be/qEVUtrk8_B4";
      // else if (re.id == 804150)
      //   a_for_youtube_url.href = "https://youtu.be/DuWEEKeJLMI";
      // else if (re.id == 946310)
      //   a_for_youtube_url.href = "https://youtu.be/wgyWDK2Gycc";
      // ********************************************************
      var youtube_url = document.createElement("div");
      a_for_youtube_url.appendChild(youtube_url);
      // youtube_url property

      youtube_url.textContent = "Watch Trailer";
      youtube_url.style.alignSelf = "center";
      youtube_url.style.marginTop = "0.6rem";
      youtube_url.style.padding = "0.6rem";
      youtube_url.style.backgroundColor = "blue";
      youtube_url.style.color = "white";
      youtube_url.style.cursor = "pointer";
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
      // download things
      download.textContent = "Download";
      download.style.display = "none";
      if (re.id == 502356) {
        // download.style.display = "block";
        download_link.href =
          "https://movies.goldmies.workers.dev/b77a3e70a9222929b48151cf94af8512224c1b395d6a6cb15ccd1b190cb657c1fc5ffa80f8d6afcdf797dac1e29c5539::2ebdbcf6ff3cb33e2084388cab946bb2/1395899601/The.Super.Mario.Bros.Movie.2023.1080p.HDCAM.English.1XBET.mkv";
      } else if (re.id == 76600) download.style.display = "block";
    //  download_link.href =
       // "https://silent-forest-f312.terapiyo2295250.workers.dev/a12c1bd61fd09df474869ee97a5386bbf7ac3a01f78e52f61b13e502c3d6f7a3e959d7252b4ee146b97be6bd34e4ec3b::175bcabfffc196981854a8cb7093acd1/1395899601/Avatar.The.Way.of.Water.2022.720p.WEB-DL.ENGLISH.x264.ESubs-KatmovieHD.vg.mkv";
      download_link.href="https://hubcloud.in/video/om2wlhh_bk2psgs";
download.style.alignSelf = "center";
      download.style.marginTop = "0.6rem";
      download.style.padding = "0.6rem";
      download.style.backgroundColor = "blue";
      download.style.color = "white";
      download.style.cursor = "pointer";
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
      flexDiv.appendChild(download_link);
      // flexDiv.appendChild(a_for_youtube_url);
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
