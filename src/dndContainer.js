import React from "react";
import "./App.css";

export default function DndContainerMui(props) {
  const onDragStart = (event, itemName) => {
    console.log("Drag operation started on: ", itemName);
    event.dataTransfer.setData("itemName", itemName);
  };

  const onDragOver = event => {
    event.preventDefault();
  };

  const onDrop = (event, newType) => {
    let itemName = event.dataTransfer.getData("itemName");
    console.log("Dropped: ", itemName);

    let updatedList = props.list.filter(item => {
      if (item.itemName === itemName) {
        item.type = newType;
      }
      return item;
    });

    props.updateList(updatedList);
  };

  var itemList = {
    left: [],
    right: []
  };

  const listProps = props.list;

  const renderList = () => {
    listProps.forEach((item, index) => {
      itemList[item.type].push(
        <div
          key={index}
          onDragStart={event => onDragStart(event, item.itemName)}
          draggable
          className={props.toDrag ? "draggableLeftItem" : "draggableRightItem"}
        >
          {item.itemName}
          <br />
          {item.type}
        </div>
      );
    });
  };

  return (
    <div>
      {renderList()}
      {props.toDrag === true ? (
        <div
          className={"draggableContainer"}
          onDragOver={event => onDragOver(event)}
          onDrop={event => {
            onDrop(event, "left");
          }}
        >
          {
            <ul>
              {itemList.left.map((item, index) => (
                <li key={index}>
                  {item}
                  <br />
                </li>
              ))}
            </ul>
          }
        </div>
      ) : (
        <div
          className={"droppableContainer"}
          onDragOver={event => onDragOver(event)}
          onDrop={event => onDrop(event, "right")}
        >
          {
            <ul>
              {itemList.right.map((item, index) => (
                <li key={index}>
                  {item}
                  <br />
                </li>
              ))}
            </ul>
          }
        </div>
      )}
    </div>
  );
}
