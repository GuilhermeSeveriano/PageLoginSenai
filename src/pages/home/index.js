import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./style.css";
import qrcode from "../../assets/img/flowcode.png";
import sesisenai from "../../assets/img/logo-sesi-senai.jpg";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="fundo">
        <div className="AreaLogin">
          <form className="qrcode">
            <div className="form-group">
              <div className="imgsesisenai">
                <img src={sesisenai} alt="logo senai" />
              </div>
              <img src={qrcode} alt="QRCode"></img>
              <p class="link">
                <a href="#paracadastro">Cadastre-se</a>
              </p>
            </div>
          </form>

          {/* -------Login Comum ---------------------------------------------------------------------------------------------------- */}
          <div className="LoginComum">
            <form className="item-form" method="post" action="">
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
          </div>
          {/*------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
