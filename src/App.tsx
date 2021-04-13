import { Fragment } from "react";
import { Parent } from "./props/Parent";
import { GuestList } from "./state/GuestList";

const App = () => {
  return (
    <Fragment>
      <h2>hello app.tsx</h2>
      <hr />
      Props: Child and Parent <Parent />
      <hr />
      State : <GuestList />
    </Fragment>
  );
};

export default App;
