import React from "react";
import styled from "styled-components";

const BlockTodo = styled.form`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 200px;
  border: solid 1px rgb(195, 195, 195);
  border-radius: 10px;
`;

const InputEnter = styled.input`
  padding: 8px 12px;
  background-color: rgb(244, 244, 244);
  border-radius: 50px;
  width: 175px;
  border: solid 1px rgb(195, 195, 195);
  outline: none;
`;

const BtnFinish = styled.button`
  width: 200px;
`;

class TodoEditor extends React.Component {
  state = {
    nameEnter: "",
  };

  // Оновлення значення input
  inputChanger = (event) => {
    this.setState({
      nameEnter: event.target.value, // оновлюємо nameEnter
    });
  };

  addNew = (event) => {
    event.preventDefault();
    if (this.state.nameEnter) {
      this.props.onAdd(this.state.nameEnter);
      this.setState({
        nameEnter: "", // очищаємо поле після додавання
      });
    }
  };

  render() {
    return (
      <BlockTodo onSubmit={this.addNew}>
        {" "}
        {/* Переносимо addNew до onSubmit */}
        <InputEnter
          type="text"
          placeholder="Add new task"
          onChange={this.inputChanger}
          value={this.state.nameEnter}
        />
        <BtnFinish type="submit">Ok</BtnFinish>
      </BlockTodo>
    );
  }
}

export default TodoEditor;
