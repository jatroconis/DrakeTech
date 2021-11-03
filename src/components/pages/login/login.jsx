import React, { memo, useRef } from "react";
import "../login/login.scss";
import InputLabel from "../../molecules/input-label/inputLabel";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ICON_MAIN } from "../../../utilities/icons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/slices/user.slice";

const Login = () => {
  const userRef = useRef(null);
  const passRef = useRef(null);
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    return (dispatch) => {
      const userlogin = {
        email: userRef.current.value,
        password: passRef.current.value,
      };
      return axios
        .post("http://dev.nexttruck.draketechdev.ca:3600/api/login ", userlogin)
        .then((res) => {
          dispatch(login(res.data));
        })
        .catch(
          (err) => alert("USUARIO INCORRECTO "));
    };
  };

  //const Data = memo(() => <div>{user && JSON.stringify(user)},{token}</div>, [token, user]);

  return (
    <div className="p-login">
      <Container fluid className="p-login__container">
        <Row className="p-login__rowcontent justify-content-md-center align-items-center">
          <Col lg="auto">
            <form>
              <div className="p-login__title">
                <h2>LOGIN</h2>
              </div>

              <div className="p-login__form">
                <div className="p-login__form__input">
                  <InputLabel text={"User"} refName={userRef} />
                  <InputLabel text={"Password"} refName={passRef} />
                </div>
                <div className="p-login__form__submit">
                  <Button
                    variant="primary"
                    onClick={() => dispatch(handleLogin())}
                  >
                    INICIAR SESION
                  </Button>
                </div>
                {/* <Data /> */}
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <img src={ICON_MAIN} alt="draketechlogo" className="p-login__logo" />
    </div>
  );
};

export default Login;
