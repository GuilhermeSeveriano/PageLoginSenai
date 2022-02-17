import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./style.css";
import qrcode from "../../assets/img/frame.png";
import sesisenai from "../../assets/img/logo-sesi-senai.jpg";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="fundo">
        <div className="AreaLogin">
          <div className="areaBox">
            <div className="imgsesisenai">
              <img src={sesisenai} alt="logo senai" />
            </div>
            <div className="qrcode">
              <img src={qrcode} alt="qrcode" />
            </div>
            <div className="cadastre">Escaneie o QRCode</div>
          </div>

          {/* -------Login Comum ---------------------------------------------------------------------------------------------------- */}

          <form className="areaBox" method="post" action="">
            <div className="imgsesisenai">
              <img src={sesisenai} alt="logo senai" />
            </div>
            <div class="form-group">
              <label className="email" for="nome_login">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Seu email"
              />
            </div>
            <div class="form-group">
              <label className="email" for="exampleInputPassword1">
                Senha
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Senha"
              />
            </div>
            <p>
              <input className="botao" type="submit" value="Entrar" />
            </p>

            <p class="link">
              <a href="#paracadastro">Cadastre-se</a>
            </p>
          </form>
          {/*------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
