import React, { useState } from "react";
import { Container, Dropdown, Form, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div
      style={{
        backgroundColor: "#0b0c10",
        minHeight: "10vh",
        paddingTop: "10px",
        color: "white",
      }}
    >
      {/* Custom style for white placeholder */}
      <style type="text/css">
        {`
          input::placeholder {
            color: white !important;
            opacity: 1; /* Ensure it's not semi-transparent */
          }
        `}
      </style>

      <Container style={{ maxWidth: "80%" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#1c2b3a",
            padding: "5px 10px",
            borderRadius: "4px",
            alignItems: "center",
          }}
        >
          {/* Dropdown */}
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-basic"
              style={{
                backgroundColor: "#1c2b3a",
                border: "none",
                color: "#fff",
                padding: "10px 15px",
              }}
            >
              TV SHOW
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">TV SHOW</Dropdown.Item>
              <Dropdown.Item href="#/action-2">OTHERS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Vertical black separator */}
          <div
            style={{
              width: "1px",
              height: "30px",
              backgroundColor: "black",
              margin: "0 15px",
            }}
          ></div>

          {/* Search bar */}
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{ flex: 1 }}
          >
            <InputGroup>
              <Form.Control
                type="text"
                required
                placeholder="Search for movies, TV shows or celebrity that you are looking for"
                style={{
                  backgroundColor: "#1c2b3a",
                  color: "#fff",
                  border: "none",
                  boxShadow: "none",
                  fontSize: "20px", // ← as per earlier request
                }}
              />
              <Button
                type="submit"
                variant="dark"
                style={{
                  backgroundColor: "#1c2b3a",
                  border: "none",
                  padding: "0 15px",
                }}
              >
                <FaSearch color="white" />
              </Button>
            </InputGroup>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default SearchBar;