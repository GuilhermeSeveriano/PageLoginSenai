import "./style.css";
import navSenai from "../../assets/img/logos_senai_preto.png";
import bandeira from "../../assets/img/bandeira.png";
const Navbar = () => {
  return (
    <navbar className="cabecalho mt-auto py-1 bg-dark d-flex">
      
      <div className="container organizacao">
        <div className="logo">
          <img src={navSenai} alt="logo Senai"></img>
        </div>
        <div className="logo2 text-white">
          <img src={bandeira} alt="bandeira suiço brasileira"></img>
          <a href="https://suicobrasileira.sp.senai.br/" rel="noreferrer"target="_blank">/suiçobrasileira </a>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
