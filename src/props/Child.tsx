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
import { Button, Space, Row, Col, Typography } from 'antd'

import {
  DeleteFilled
} from '@ant-design/icons';
const { Text } = Typography;

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
      <Space>
        <Row>
          <Col span="24" className="gx-text-red">
            <Text type="success">hello child.tsx</Text>
          </Col>
          <Col span="24">
            <Text type="danger" ><Space>Color:<span style={{ color }}> {color}</span></Space></Text>
          </Col>
          <Col span="24">
            <div>
              <Space>Name:  {name} {name && <Button type="link" onClick={handleRemoveName} icon={<DeleteFilled style={{ color: "red" }} />} />}</Space>
            </div>
          </Col>

          <Col>
            <Space>
              {/* {children} : */}
              <Button type="primary" onClick={handleClick}>child me</Button>
            </Space>
          </Col>
        </Row>


      </Space>
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
