import "./App.css";
import { useState } from "react";
import MainDisplay from "./Components/MainDisplay";
import a from "./Images/a.jpg";
import b from "./Images/b.jpg";
import c from "./Images/c.jpg";
import d from "./Images/d.jpg";
import e from "./Images/e.jpg";

const IMAGES = [a, b, c, d, e];

function App() {
  const [selectedImage, setSelectedImage] = useState(a);
  return (
    <div className="App">
      <MainDisplay imgPath={selectedImage} />
      <div className="image-list">
        {IMAGES.map((path) => (
          <img
            src={path}
            alt="img"
            width="230px"
            className="img-list-item"
            onClick={() => setSelectedImage(path)}
            key={path}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
