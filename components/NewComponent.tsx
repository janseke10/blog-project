import React from "react";

interface Props {
  name: string;
  age: number;
  isOlderThanTen: boolean;
}

const NewComponent: React.FC<Props> = ({ name, age, isOlderThanTen }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Is older than 10: {isOlderThanTen}</h2>
    </div>
  );
};

export default NewComponent;
