import "./input.component.css";
import React, { FormEvent, useEffect } from "react";

interface IInputProps {
  inputField: string;
  setInputField: React.Dispatch<React.SetStateAction<string>>;
  handleAddToList: (e: React.FormEvent) => void;
}

const Input = ({ inputField, setInputField, handleAddToList }: IInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputField(event.currentTarget.value);
  };

  return (
    <form
      className="input-container"
      onSubmit={(e) => {
        handleAddToList(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className="input-box"
        placeholder="Add a To Do"
        type="input"
        onChange={onInputChange}
        value={inputField}
      />
      <button className="input-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default Input;
