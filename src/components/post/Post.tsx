import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createContext, useState } from "react";
import Notes from "../notes/Notes";
import manageData from "../../helper/manageData";
//import Test from "../test/test";
// import NoteReviewCard from "../card/NoteReviewCard";
//import NoteReviewCard from "../card/NoteReviewCard";

// interface Context {
//   comment:string;
//   display:string;

// }
export const NoteContext = createContext({});
export default function Post() {
  const [comment, setComment] = useState(["default value"]);
  const [display, setDisplay] = useState("");
  const [components, setcomponents] = useState([0]);
  const [componentName, setComponentName] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  manageData(comment[comment.length - 1]);

  function addComponent() {
    if (components[0] == 0) components.splice(0, 1);
    if (componentName.length > 0) {
      setcomponents([...components, componentName[0]]);
      componentName.splice(0, 1);
    }
    console.log("name" + componentName, "component : " + components);
  }

  const editNote = () => {
    setDisplay("true")
    setcomponents([...components])
  };
  return (
    <>
      <form action="#">
        <label htmlFor="title">Title</label>
        <br />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <br />
        <br />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="default value"
          variant="filled"
          onChange={(e) => setComment([e.currentTarget.value])}
        />
        <br />
        <br />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            setDisplay("true");
            return addComponent();
          }}
        >
          Send
        </Button>{" "}
        <Button color="secondary" onClick={editNote}>
          Edit
        </Button>
        <br />
      </form>
      {/* <Test /> */}
      {display ? (
        <NoteContext.Provider
          value={{
            comment: comment,
            display: display,
            setDisplay: setDisplay,
            components: components,
            setcomponents: setcomponents,
          }}
        >
          {/* <Notes /> */}
          {components.map((item, id) => {
            if (!display) return;
            // console.log(id);
            return <Notes key={item} id={id} />;
          })}
        </NoteContext.Provider>
      ) : (
        <div></div>
      )}
    </>
  );
}
