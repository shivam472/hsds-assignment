import { useEffect, useState } from "react";
import Card from "./components/UI/Card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://medtest.utkarshh.in/api/vol/community-list/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setData(data.data);
      });
  }, []);

  return (
    <div className="posts-container">
      {data.map((dataEle) => (
        <div key={dataEle.id} className="card-container">
          <Card>
            <div>
              <h1>{dataEle.title}</h1>
              <h3>- {dataEle.writer_name}</h3>
              {dataEle.image && <img src={dataEle.image} alt={dataEle.title} />}
              {!dataEle.image && (
                <img
                  src="https://image.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg"
                  alt={dataEle.title}
                />
              )}
              <p>{dataEle.content}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default App;
