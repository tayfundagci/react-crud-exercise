import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import { GlobalContext } from "../context/GlobalState";

function UserList() {
  const { users } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4 ">
      {users.map((user) => (
        <ListGroupItem className="d-flex align-items-center" key={user.id}>
          <strong>{user.name}</strong>
          <div className="ms-auto">
            <Link to="/edit/1" className="btn btn-warning me-1">
              Edit
            </Link>
            <Button color="danger">Delete</Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default UserList;
