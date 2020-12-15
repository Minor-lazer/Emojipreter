import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "💏": "Kiss",
  "👩‍❤️‍💋‍👨": "Kiss: Woman, Man",
  "👨‍❤️‍💋‍👨": "Kiss: Man, Man",
  "👩‍❤️‍💋‍👩": "Kiss: Woman, Woman",
  "💑": "Couple with Heart",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down"
};

export default function App() {
  var [meaning, setUserInput] = useState("");
  function emojiChangeHandler(event) {
    var inputUser = event.target.value;
    var meaning = emojiDictionary[inputUser];
    setUserInput(meaning);
  }

  function emojiOnClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }

  var emojisWeKnow = Object.keys(emojiDictionary);

  return (
    <div className="App">
      <h1 className="heading"> What the Emoji ?! </h1>
      <h4 className="heading">
        Ready to send an emoji to your favourite one? But clueless what does it
        actually means? Worry not! You are just at the right place!
        <br />
      </h4>
      <h5>
        just click from the below emojis or type in the box to check out their
        meaning
      </h5>
      <input
        className="inputText"
        onChange={emojiChangeHandler}
        placeholder="Type Your Emojis here "
      />
      <div className="output"> {meaning} </div>
      <h3 className="heading">Click in emoji to know meaning </h3>
      <div className="emoji">
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiOnClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {" "}
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
