import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/common/index";
import LogoDart from "../../assets/images/logo-dark.png";
import "./CreateUser.scss";

export default function CreateUser() {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string("")
      .min(4, "Ít nhất 4 ký tự")
      .max(15, "Nhiều nhất 15 ký tự")
      .required("Bắt buộc"),
    yourFarm: Yup.string("")
      .min(4, "Ít nhất 4 ký tự")
      .max(15, "Nhiều nhất 15 ký tự")
      .required("Bắt buộc"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      yourFarm: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="create">
      <div className="create__container">
        <div className="create__title">
          <img className="create__img" src={LogoDart} alt="" />
          <h3 className="create__h3">Đăng ký tài khoản</h3>
        </div>
        <form className="create__form" onSubmit={formik.handleSubmit}>
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

          <Button title="Tiếp tục" typeButton="submit" />
        </form>
      </div>
    </div>
  );
}
