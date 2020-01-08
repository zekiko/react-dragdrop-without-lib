import React from "react";
import DndContainer from "./dndContainer";

const inputList = [
  {
    id: "1",
    itemName: "First Element",
    type: "left"
  },
  {
    id: "2",
    itemName: "Second Element",
    type: "left"
  },
  {
    id: "3",
    itemName: "Third Element",
    type: "left"
  },
  {
    id: "4",
    itemName: "Fourth Element",
    type: "left"
  }
];

export default function Demo() {
  const [list, setList] = React.useState(inputList);

  const updateList = l => {
    setList(l);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Drag Elements Between Containers</h1>
      <div style={{ float: "left" }}>
        <DndContainer toDrag list={list} updateList={updateList} />
      </div>
      <div style={{ float: "right" }}>
        <DndContainer toDrag={false} list={list} updateList={updateList} />
      </div>
    </div>
  );
}
