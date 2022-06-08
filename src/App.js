import react from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import Note from "./component/Note";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((val, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="imdon">
        <h1>
          <Header />
        </h1>
        <Body passNote={addNote} />

        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
};
export default App;
