import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const deleteMe=()=>{
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note_class mb-5">
        <div class="card">
          <div class="card-body">
            <h2>{props.title} </h2>
            <p>{props.content}</p>
            <Button onClick={deleteMe} variant="contained" color="secondary">
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Note;
