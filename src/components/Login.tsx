import React, { useState } from "react";
import classnames from "classnames";
import close from "@/static/icon/close.png";
import { store } from "@/store/store";
import { Toast } from "antd-mobile";

export const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [enLogin, setEnLogin] = useState(false);

  //电话改变
  const handleEmail = (e: any) => {
    const email = e.target.value;
    setEmail(email);
    judgeLogin(pass, email);
  };

  //验证码改变
  const handlePass = (e: any) => {
    const pass = e.target.value;
    setPass(pass);
    judgeLogin(pass, email);
  };

  //校验电话
  const validate = (phone: string) => {
    if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(phone)) {
      alert("请输入正确的邮箱");
      return false;
    }
    return true;
  };

  //判断能否登录
  const judgeLogin = (pass: string, email: string) =>
    pass !== "" && email !== "" ? setEnLogin(true) : setEnLogin(false);

  //登录操作
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (enLogin && validate(email)) {
      //登录操作
      submitLogin();
    }
  };

  const submitLogin = () => {
    store.submitLoginByEmail(email, pass).then((res: any) => {
      const { id } = res.account;
      store.setStorage("uid", id);
      Toast.show("登录成功");
      setTimeout(() => {
        props.history.go(-1);
      }, 1000);
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="login">
      <div className="container">
        <img src={close} alt="关闭按钮" onClick={handleBack} />
        <h2>欢迎登录</h2>
        <form className="form">
          <input
            type="tel"
            value={email}
            placeholder="输入邮箱"
            onChange={handleEmail}
          />
          <input
            type="password"
            className="pass"
            value={pass}
            placeholder="输入密码"
            onChange={handlePass}
          />
          <button
            className={classnames(
              `button ${enLogin ? "button__active" : "button__default"}`
            )}
            onClick={handleSubmit}
          >
            登录
          </button>
        </form>
      </div>
    </div>
  );
};
