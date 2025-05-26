import { useContext } from "react";
import { NoteContext } from "../post/Post";
import NoteReviewCard from "../card/NoteReviewCard";
import { Button } from "@mui/material";

type Note = {
  components: [];
  comment: string;
  setDisplay: Function;
  setcomponents: Function;
};

export default function Notes({ id }: { id: number }) {
  const note: Note = useContext(NoteContext);

  const editNote = () => {
    // const title = document.getElementById('filled-basic');
    // title.style.display = "none"
    // if(title) title.setAttribute('disabled', "true");
    const comment = document.getElementById("filled-multiline-static");
    if (comment) {
      comment.setAttribute("defaultValue", note.comment);
      // console.log(comment.getAttribute('defaultValue'))
    }
    //console.log(note.components[note.components.length - 1]);
    // note.setcomponents([...note.components]);

    note.setDisplay("");
  };
  const deleteNote = () => {
    //localStorage.removeItem("comment");
    //note.setcomponents([0])
    // console.log(localStorage.getItem("comment"));
    const findCard = note.components.splice(id, 1);

    const filter = note.components.filter((item) => {

      if (findCard[0] != item) return item;
      else return "no";

    });

    note.setcomponents(filter);
    note.setDisplay("");
    //console.log(filter, findCard[0]);
  };

  return (
    <div>
      <NoteReviewCard id={id}/>
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
