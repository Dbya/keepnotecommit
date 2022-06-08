import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";

const Body = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
    // const value=e.target.value;
    // const name=e.target.name;

    const{value,name}=e.target;

    setNote((oldValue)=>{
      return{
        ...oldValue,
        [name]:value,
      };
    });
  };
  const addEvent= ()=>{
    props.passNote(note);
    setNote({
      title:"",
      content:"",
    })
  };
  

  return (
    <>
      <div className="main_body ">
        <div className="part mt-5">
          <form className="m-5">
            <input type="text" placeholder="Title" 
            name="title"
            value={note.title}
            onChange={inputEvent}/>
            <br />
            <textarea
              className=""
              cols="30"
              rows=""
              placeholder="Write your note here"
              name="content"
              value={note.content}
              onChange={inputEvent}
            ></textarea>
            <Button onClick={addEvent} variant="contained" color="primary">
              <AddIcon />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Body;
