import { useState } from "react";
import { Child } from "./Child";

export const Parent: React.FC<{}> = () => {
  const [name, setName] = useState<string>("");

  const handleClick = () => {
    setName("mohammad");
  };

  const handleRemoveName = () => {
    setName("");
  };

  return (
    <div>
      <Child
        color="#ffc600"
        handleClick={handleClick}
        name={name}
        handleRemoveName={handleRemoveName}
      >
        hello children
      </Child>
    </div>
  );
};
