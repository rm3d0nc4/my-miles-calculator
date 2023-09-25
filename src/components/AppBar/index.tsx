import arrowBack from "../../assets/icons/arrow_back.svg";
import avatar from "../../assets/avatars/avatar.svg";


export default function AppBar() {
  return (
    <div className="app-bar">
      <img src={arrowBack} />
      <p>Calcular milhas com desconto!</p>
      <img src={avatar} alt="avatar" />
    </div>
  );
}
