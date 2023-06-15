import DivAlign from "./styles";

export default function SecNameEmail() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <DivAlign>
      <div className="divSpace">
        <h3>{user.name_user}</h3>
        <p>{user.email}</p>
      </div>

      <div className="divStyle">
        <p className={"p-Viajante"}>Novo Viajante</p>
      </div>
    </DivAlign>
  );
}
