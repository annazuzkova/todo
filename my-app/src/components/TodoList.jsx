import React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 10px 10px;
  border: solid 1px rgb(195, 195, 195);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 270px;
  border-radius: 10px;
`;

const ButtonList = styled.button`
  width: 200px;
`;

const Text = styled.span`
  padding: 10px 20px;
`;

function TodoList({ choose, deleteItem, array }) {
  return (
    <List>
      {array.map((element) => (
        <Li key={element.id}>
          <div>
            <input
              type="checkbox"
              checked={element.completed}
              onChange={() => choose(element.id)}
            />
            <Text>{element.text}</Text>
          </div>
          <ButtonList onClick={() => deleteItem(element.id)}>Delete</ButtonList>
        </Li>
      ))}
    </List>
  );
}

export default TodoList;
