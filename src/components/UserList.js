import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import { GlobalContext } from "../context/GlobalState";

function UserList() {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4 ">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex align-items-center" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ms-auto">
                <Link to={`/edit/${user.id}`} className="btn btn-warning me-1">
                  Edit
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No User</h4>
      )}
    </ListGroup>
  );
}

export default UserList;
