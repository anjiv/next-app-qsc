import { getUsers } from "@/api/users";
import Link from "next/link";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map(userTodo => (
          <div key={userTodo.id} className="card">
            <div className="card-header">{userTodo.name}</div>
            <div className="card-body">
              <div>{userTodo.company.name}</div>
              <div>{userTodo.website}</div>
              <div>{userTodo.email}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" href={`users/${userTodo.id.toString()}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
