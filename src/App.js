import React, { useState } from "react";
import "./styles.css";
const music = {
  Romance: [
    {
      src: "https://i.ytimg.com/vi/k3HAThSRRZ0/hqdefault.jpg",
      song: "Tum hi Ho",
      rating: "4.5/5"
    },
    {
      src:
        "https://a10.gaanacdn.com/images/song/41/21640041/crop_175x175_1516001722.jpg",
      song: "Paani da Rang",
      rating: "4/5"
    },
    {
      src: "https://i.ytimg.com/vi/DK_UsATwoxI/maxresdefault.jpg",
      song: "Nazm Nazm",
      rating: "3.5/5"
    }
  ],
  Rock: [
    {
      src:
        "https://media1.santabanta.com/full1/Bollywood%20Movies/Rock%20On/roc9e.jpg",
      song: "Rock On",
      rating: "4/5"
    }
  ],
  Party: [
    {
      src: "https://i.ytimg.com/vi/IVMquMDUQZY/maxresdefault.jpg",
      song: "Muqabala",
      rating: "4/5"
    },
    {
      src:
        "https://1.bp.blogspot.com/-zjlejcSkfYI/XayVicTO_0I/AAAAAAAAAEg/bxUGhRbfgFId9cx5UWrZMclWn2JtlDavQCLcBGAsYHQ/s1600/benny-dayal-badtameez-dil-lyrics.jpg",
      song: "Badtameez Dil",
      rating: "5/5"
    }
  ]
};
export default function App() {
  const [songDetails, setMusicDetails] = useState("Romance");
  //const [ratingDetails, setRatingDetails] = useState([]);

  const details = (event) => {
    let genre = event.target.innerText;
    setMusicDetails(genre);
  };

  return (
    <div className="App">
      <header>
        <h1>good Musics</h1>
        <p>Checkout my favorite musics. Select a genre to get started</p>
      </header>
      <ul>
        <li onClick={details} className="inline-list" value="Romance">
          Romance
        </li>
        <li onClick={details} className="inline-list" value="Rock">
          Rock
        </li>
        <li onClick={details} className="inline-list" value="Party">
          Party
        </li>
      </ul>
      <hr />

      <ul>
        {music[songDetails].map((item) => {
          return (
            <li id="songDetails" value={item}>
              <div>
                <span>
                  <img src={item.src} alt="" />
                </span>
              </div>
              <div id="songRating">
                <span>{item.song}</span>
              </div>
              <div id="songRating">
                <span id="songRating">{item.rating}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
