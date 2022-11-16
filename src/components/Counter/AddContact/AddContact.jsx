import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddContact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="d-flex flex-column mt-5 align-items-center">
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="name"
        className="mb-2 w-50"
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        value={lastname}
        placeholder="lastname"
        className="mb-2 w-50"
      />

      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        placeholder="phone"
        className="mb-2 w-50"
      />
      <Button variant="dark" className="w-50">
        Add contact
      </Button>
    </div>
  );
};

export default AddContact;
