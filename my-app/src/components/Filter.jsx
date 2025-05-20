import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 8px 12px;
  background-color: rgb(244, 244, 244);
  border-radius: 50px;
  width: 270px;
  border: solid 1px rgb(195, 195, 195);
  outline: none;
  height: 20px;
`;

const Filter = ({ onChange }) => {
  return (
    <Input
      type="text"
      onChange={(event) => {
        onChange(event.target.value);
      }}
      placeholder="filter"
    />
  );
};

export default Filter;
