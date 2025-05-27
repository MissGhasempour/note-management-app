import { TextField, Button, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createContext, useEffect, useState } from "react";
import Notes from "../notes/Notes";
import manageData from "../../helper/manageData";
//import Test from "../test/test";

export const NoteContext = createContext({});

export default function Post() {
  const [comment, setComment] = useState("default value");
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

      // console.log(comment[0]);
    }
    //console.log("name" + componentName, "component : " + components);
  }

  useEffect(() => {
    components.splice(2, 2);
    console.log(components);
  });

  const editNote = () => {
    setDisplay("true");
    setcomponents([...components]);
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
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        <br />
        <br />
        <Button color="secondary" onClick={editNote}>
          Edit
        </Button>{" "}
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            setDisplay("true");
            return addComponent();
          }}
        >
          Send
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
            setComment: setComment,
          }}
        >
          {components.map((item, id) => {
            if (!display) return;

            return <Notes key={item} id={id} />;
          })}
        </NoteContext.Provider>
      ) : (
        <div></div>
      )}
      <br />
      <Container maxWidth="sm" sx={{ marginTop: "5vh" }}>
        <Button
          variant="contained"
          onClick={() => {
            components.filter((cardValue) => {
              console.log(cardValue);
              return cardValue < 5;
            });
          }}
        >
          previous
        </Button>{" "}
        <Button
          variant="contained"
          onClick={() => {
            setcomponents([]);
            const filter = components.filter((cardValue) => {
              return cardValue < 5;
            });
            //console.log(filter);
          }}
        >
          next
        </Button>
      </Container>
    </>
  );
}
