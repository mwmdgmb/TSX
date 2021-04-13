import { useState } from "react";

export const GuestList: React.FC<{}> = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    setName(value);
  };

  const handleAddUser: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (name) {
      setName("");
      setGuests([...guests, name]);
    }
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
    evt
  ) => {
    if (evt.keyCode === 13 || evt.key === "Enter") {
      if (name) {
        setName("");
        setGuests([...guests, name]);
      } else {
        alert("please enter name");
      }
    }
  };

  const handleRemoveUser = (id: string) => {
    let filterUser = guests.filter((guest) => guest !== id);

    setGuests(filterUser);
  };

  return (
    <div>
      <h4>Guest List</h4>
      {guests.map((guest) => (
        <ul key={guest}>
          <li>
            {guest}
            <button onClick={() => handleRemoveUser(guest)}>Trash</button>
          </li>
        </ul>
      ))}
      {/* <GuestListProps guests={guests} /> */}
      <label>Add User :</label>
      <input
        value={name}
        onChange={handleChangeInput}
        onKeyDown={handleKeyPress}
      />
      <button disabled={name ? false : true} onClick={handleAddUser}>
        add
      </button>
    </div>
  );
};

// const GuestListProps = ({ guests }) => (

//   guests.map((guest) => (
//     <ul>
//       <li>{guest}</li>
//     </ul>
//   ))
// )

GuestList.defaultProps = {
  name: "",
};

GuestList.displayName = "Guest List Component";
