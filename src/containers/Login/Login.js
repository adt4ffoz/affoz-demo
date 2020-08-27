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
    name: Yup.string("")
      .min(4, "Ít nhất 4 ký tự")
      .max(15, "Nhiều nhất 15 ký tự")
      .required("Bắt buộc"),
    yourFarm: Yup.string("")
      .min(4, "Ít nhất 4 ký tự")
      .max(15, "Nhiều nhất 15 ký tự")
      .required("Bắt buộc"),
    email: Yup.string("").email("Email không khả dụng").required("Bắt buộc"),
    password: Yup.string("").min(8, "Ít nhất 8 kí tự").required("Bắt buộc"),
    phone: Yup.string("")
      .min(10, "Ít nhất là 10 số")
      .max(11, "Nhiều nhất là 11 số")
      .required("Bắt buộc"),
    confirm: Yup.string("")
      .required("Bắt buộc")
      .test("Mật khẩu chưa khớp", "Mật khẩu đã khớp", function (value) {
        return this.parent.password === value;
      }),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      yourFarm: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => console.log(values),
  });

  const handleChangeBack = () => {
    setIsNext(true);
  };
  const handleChangeNext = () => {
    setIsNext(false);
  };

  const firstParagraph = (
    <p>Nếu bạn chưa có tài khoản hãy <span><Link to="/create-user" className="link">đăng ký</Link></span></p>
  )

  const secondParagraph = (
    <p>
      <Link 
        to="/"
        className="link"
      >
        Quên mật khẩu
      </Link>
    </p>
  )

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
                    {formik.touched.name && formik.errors.name}
                  </span>
                </div>
                <input
                  className={
                    formik.touched.name && formik.errors.name
                      ? "create__input create__input--err"
                      : "create__input"
                  }
                  type="text"
                  placeholder="Email / số điện thoại"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="create__main">
                <div className="create__err">
                  <span className="create__err">
                    {formik.touched.yourFarm && formik.errors.yourFarm}
                  </span>
                </div>
                <input
                  className={
                    formik.touched.yourFarm && formik.errors.yourFarm
                      ? "create__input create__input--err"
                      : "create__input"
                  }
                  type="password"
                  placeholder="Mật khẩu"
                  name="yourFarm"
                  id="yourFarm"
                  onChange={formik.handleChange}
                  value={formik.values.yourFarm}
                  onBlur={formik.handleBlur}
                />
              </div>
              <Button
                title="Vào Trang Quản Lý"
                typeButton="button"
                handleClick={() => {}}
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
