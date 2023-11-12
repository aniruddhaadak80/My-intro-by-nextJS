export default function AddUsers() {
  return (
    <>
      <h1>User Details :</h1>
      <input
        className="user-input"
        type="text"
        placeholder="Enter user details..."
      />
      <button className="btn btn-outline-warning">Add users</button>
    </>
  );
}
