import { useState } from "react";
import { Input, Button, Form, List, Row, Col } from 'antd'
import { DeleteFilled } from "@ant-design/icons";


export const GuestList: React.FC<{}> = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  let [form] = Form.useForm()

  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    setName(value);
  };

  const handleAddUser: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (name) {
      setName("");
      setGuests([...guests, name]);
      //form.resetFields()
    }
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
    evt
  ) => {
    if (evt.keyCode === 13 || evt.key === "Enter") {
      if (name) {
        setName("");
        setGuests([...guests, name]);
        //form.resetFields()
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

      <Row justify="center">
        <Col span="24">
          <Row justify="center">

            <Form layout="inline" >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
                
              >
                <Input
                  onChange={handleChangeInput}
                  onKeyDown={handleKeyPress}
                />
              </Form.Item>

              <Form.Item>
                <Button block type="primary" disabled={name ? false : true} onClick={handleAddUser}>
                  add Name
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </Col>
        <Col span="6">
          <List
            itemLayout="horizontal"
            dataSource={guests}
            renderItem={guest => (
              <List.Item
                actions={[<Button onClick={() => handleRemoveUser(guest)} icon={<DeleteFilled />} />]}
              >

                <List.Item.Meta

                  title={<a href="https://ant.design">{guest}</a>}

                />


              </List.Item>
            )}
          /></Col>
      </Row>
      {/* <GuestListProps guests={guests} /> */}




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
