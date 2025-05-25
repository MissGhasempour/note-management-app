import { useContext } from "react";
import { NoteContext } from "../post/Post";
import NoteReviewCard from "../card/NoteReviewCard";
import { Button } from "@mui/material";

export default function Notes({id}:{id:number}) {
  const note = useContext(NoteContext);
  
  const editNote = () => {
    // const title = document.getElementById('filled-basic');
    // title.style.display = "none"
    // if(title) title.setAttribute('disabled', "true");
    const comment = document.getElementById("filled-multiline-static");
    if (comment) {
      comment.setAttribute("defaultValue", note.comment);
      // console.log(comment.getAttribute('defaultValue'))
    }
    console.log(note.components[note.components.length - 1]);
    // note.setcomponents([...note.components]);
  
    note.setDisplay("");
  };
  const deleteNote = () => {
    note.setDisplay("");
    localStorage.removeItem("comment");
    note.setcomponents([0])
   // console.log(localStorage.getItem("comment"));
  };

  return (
    <div>
      <NoteReviewCard id={id} />
      <br />
      <Button color="secondary" onClick={editNote}>
        Edit
      </Button>
      <Button variant="outlined" color="error" onClick={deleteNote}>
        Delete
      </Button>
    </div>
  );
}
