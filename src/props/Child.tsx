// import PropTypes from "prop-types";

// interface ChildProps  extends React.HTMLAttributes<HTMLDivElement>{
//   color: string;
//   hexCode?: string | undefined;
//   handleClick: React.HTMLAttributes<HTMLButtonElement>['onClick']
//   name?: string;
// }

// // interface ChildProps {
// //   color?: string; // read of defaultProps
// // }

// // Child = ({color} : ChildProps) =>
// export const Child: React.FC<ChildProps> = ({
//   color,
//   hexCode,
//   handleClick,
//   name,
//   ...rest
// }) => {
//   return (
//     <div {...rest}>
//       hello child.tsx : <span style={{ color }}>{color}</span>
//       {name}
//       <button onClick={handleClick}>Clid me</button>
//     </div>
//   );
// };

// // when is not required is called color intaerface ChildProps { color?: string }
// Child.defaultProps = {
//   color: "blue",
//   hexCode: "#000",
//   name: "ali"
// };

// Child.propTypes = {
//   color: PropTypes.string.isRequired,
//   hexCode: PropTypes.string.isRequired,
// };

// Child.displayName = "Name is Changed with displayName";

import PropTypes from "prop-types";

interface ChildProps {
  color: string;
  hexCode?: string | undefined;
  handleClick: () => void;
  name?: string;
  handleRemoveName: () => void;
}

// interface ChildProps {
//   color?: string; // read of defaultProps
// }

// Child = ({color} : ChildProps) =>
export const Child: React.FC<ChildProps> = ({
  color,
  hexCode,
  handleClick,
  name,
  handleRemoveName,
  children,
}) => {
  return (
    <div>
      hello child.tsx : <span style={{ color }}>{color}</span>
      <div>
        {name} {name && <button onClick={handleRemoveName}>Remove Name</button>}
      </div>
      {children}
      <button onClick={handleClick}>Clid me</button>
    </div>
  );
};

// when is not required is called color intaerface ChildProps { color?: string }
Child.defaultProps = {
  color: "blue",
  hexCode: "#000",
  name: "ali",
};

Child.propTypes = {
  color: PropTypes.string.isRequired,
  hexCode: PropTypes.string.isRequired,
};

Child.displayName = "Name is Changed with displayName";
