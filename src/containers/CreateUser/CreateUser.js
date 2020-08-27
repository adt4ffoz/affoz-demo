import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

import { Button } from "../../components/common/index";
import LogoDart from "../../assets/images/logo-dark.png";
import IconVN from "../../assets/images/vietnam.png";
import "./CreateUser.scss";

export default function CreateUser() {
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

  return (
    <div className="create">
      <div className="create__container">
        <div className="create__title">
          {isNext ? null : (
            <ArrowLeft className="create__icon" onClick={handleChangeBack} />
          )}
          <div className="create__logo">
            <img className="create__img" src={LogoDart} alt="" />
            <h3 className="create__h3">Đăng ký tài khoản</h3>
          </div>
        </div>
        <form className="create__form" onSubmit={formik.handleSubmit}>
          {isNext ? (
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
                  placeholder="Họ và tên"
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
                  type="text"
                  placeholder="Tên cửa hàng"
                  name="yourFarm"
                  id="yourFarm"
                  onChange={formik.handleChange}
                  value={formik.values.yourFarm}
                  onBlur={formik.handleBlur}
                />
              </div>
              <Button
                title="Tiếp tục"
                typeButton="button"
                handleClick={handleChangeNext}
              />
              <div className="create__have">
                <span>
                  Bạn đã có mật khẩu chưa?{" "}
                  <Link className="create__link" to="/login">
                    Đăng nhập
                  </Link>
                </span>
              </div>
            </div>
          ) : (
            <div className="create__container-input">
              <div className="create__main">
                <div className="create__err">
                  <span className="create__err">
                    {formik.touched.email && formik.errors.email}
                  </span>
                </div>
                <input
                  className={
                    formik.touched.email && formik.errors.email
                      ? "create__input create__input--err"
                      : "create__input"
                  }
                  type="email"
                  placeholder="Nhập email của bạn"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="create__main">
                <div className="create__err">
                  <span className="create__err">
                    {formik.touched.phone && formik.errors.phone}
                  </span>
                </div>
                <input
                  className={
                    formik.touched.phone && formik.errors.phone
                      ? "create__input create__input--err"
                      : "create__input"
                  }
                  type="text"
                  placeholder="Số điện thoại"
                  name="phone"
                  id="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
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
                  placeholder="Mật khẩu của bạn"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="create__main">
                <div className="create__err">
                  <span className="create__err">
                    {formik.touched.confirm && formik.errors.confirm}
                  </span>
                </div>
                <input
                  className={
                    formik.touched.confirm && formik.errors.confirm
                      ? "create__input create__input--err"
                      : "create__input"
                  }
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  name="confirm"
                  id="confirm"
                  onChange={formik.handleChange}
                  value={formik.values.confirm}
                  onBlur={formik.handleBlur}
                />
              </div>
              <Button title="Hoàn tất" typeButton="submit" />
              <div className="create__have">
                <input type="checkbox" />
                <span>
                  Tôi đã đồng ý với các
                  <Link className="create__link" to="/login">
                    điều khoản của Affoz
                  </Link>
                </span>
                <img className="create__vn" src={IconVN} alt="" />
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
