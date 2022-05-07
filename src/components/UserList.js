import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

function UserList() {
  return (
    <ListGroup className="mt-4 ">
      <ListGroupItem className="d-flex align-items-center">
        <strong>User One</strong>
        <div className="ms-auto">
          <Link to="/edit/1" className="btn btn-warning me-1">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>

      <ListGroupItem className="d-flex align-items-center">
        <strong>User One</strong>
        <div className="ms-auto">
          <Link to="/edit/1" className="btn btn-warning me-1">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
}

export default UserList;
