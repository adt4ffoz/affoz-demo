import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowLeft } from "react-feather";

import { Button } from "../../components/common/index";
import LogoDart from "../../assets/images/logo-dark.png";
import "./Login.scss";

export default function Login() {
  const [isNext, setIsNext] = useState(true);

  const ValidationSchema = Yup.object().shape({
    emailOrPhone: Yup.string("").required("Bắt buộc"),
    password: Yup.string("").min(8, "Ít nhất 8 kí tự").required("Bắt buộc"),
  });
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => console.log(values),
  });

  const { emailOrPhone, password } = formik.values;

  const handleChangeBack = () => {
    setIsNext(true);
  };
  // const handleChangeNext = () => {
  //   setIsNext(false);
  // };

  const firstParagraph = (
    <p>
      Nếu bạn chưa có tài khoản hãy{" "}
      <span>
        <Link to="/create-user" className="login__link">
          Đăng ký
        </Link>
      </span>
    </p>
  );

  const secondParagraph = (
    <p>
      <Link to="/" className="login__link">
        Quên mật khẩu
      </Link>
    </p>
  );

  return (
    <div className="create">
      <div className="create__container">
        <div className="create__title">
          {isNext ? null : (
            <ArrowLeft className="create__icon" onClick={handleChangeBack} />
          )}
          <div className="create__logo">
            <img className="create__img" src={LogoDart} alt="" />
            <h3 className="create__h3">Đăng nhập</h3>
          </div>
        </div>
        <form className="create__form" onSubmit={formik.handleSubmit}>
          <div className="create__container-input">
            <div className="create__main">
              <div className="create__err">
                <span className="create__err">
                  {formik.touched.emailOrPhone && formik.errors.emailOrPhone}
                </span>
              </div>
              <input
                className={
                  formik.touched.emailOrPhone && formik.errors.emailOrPhone
                    ? "create__input create__input--err"
                    : "create__input"
                }
                type="text"
                placeholder="Email / số điện thoại"
                name="emailOrPhone"
                id="emailOrPhone"
                onChange={formik.handleChange}
                value={formik.values.emailOrPhone}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="create__main">
              <div className="create__err">
                <span className="create__err">
                  {formik.touched.password && formik.errors.password}
                </span>
              </div>
              <input
                className={
                  formik.touched.password && formik.errors.password
                    ? "create__input create__input--err"
                    : "create__input"
                }
                type="password"
                placeholder="Mật khẩu"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </div>
            <Button
              title="Vào Trang Quản Lý"
              typeButton="button"
              handleClick={() => {}}
              status={emailOrPhone && password ? null : "hidden"}
            />
            <div className="login-footer">
              {firstParagraph}
              {secondParagraph}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
