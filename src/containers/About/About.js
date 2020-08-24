import React from "react";
import "./About.scss";
import ImageAbout from "../../assets/images/logo-about.png";

export default function About() {
  return (
    <div className="about">
      <div className="about__logo">
        <img src={ImageAbout} alt="" className="about__img" />
      </div>
      <h1 className="about__title">NÔNG NGHIỆP KỸ THUẬT CAO</h1>
      <div className="about__undercode"></div>
      <h2 className="about__subtitle">Tiềm Năng Ngành Nông Nghiệp Việt Nam</h2>
      <p className="about__paragraph">
        Từ năm 2013-2019, công nghiệp chế biến nông sản cả nước đã có bước phát
        triển mạnh trên cả quy mô và mức độ hiện đại; tốc độ tăng trưởng giá trị
        gia tăng hàng năm đạt khoảng 5 - 7%; xuất khẩu chiếm khoảng 65% tổng giá
        trị chế biến. Công nghiệp chế biến nông sản phát triển góp phần quan
        trọng vào tăng trưởng các mặt hàng nông sản xuất khẩu. Việt Nam tiếp tục
        duy trì 8 nhóm mặt hàng có kim ngạch xuất khẩu hàng năm từ 1 tỷ USD trở
        lên, trong đó, có 4 mặt hàng đạt kim ngạch trên 3 tỷ USD. Điều này cho
        thấy tiềm năng phát triển của ngành Nông Nghiệp Việt Nam là vô cùng lớn.
      </p>
      <h2 className="about__subtitle">
        Những Khó Khăn Mà Người Nông Dân Gặp Phải
      </h2>
      <p className="about__paragraph">
        Với kinh nghiệm nhiều năm đồng hành và làm việc cùng khách hàng trong
        ngành Nông Nghiệp, AFFOZ thấu hiểu được những khó khăn mà khách hàng gặp
        phải.
      </p>
      <ul>
        <li className="about__list">
          Khó quản lý hoạt động của trang thiết bị tại nông trại
        </li>
        <li className="about__list">
          Chưa giải quyết được bài toán Chi Phí & Lợi Nhuận
        </li>
        <li className="about__list">
          Chưa chủ động trọng việc quản lý và vận hành trang trại
        </li>
        <li className="about__list">
          Không kiểm soát được rủi ro có thể xảy ra cho trang trại, gây thiệt
          hại nặng nề
        </li>
        <li className="about__list">
          Chi phí chuyển đổi sang thiết bị công nghệ cao đắt đỏ
        </li>
      </ul>
      <p className="about__paragraph">
        Vì thế AFFOZ không ngừng tìm kiếm những cách thức mới giúp tự động hóa
        quá trình nuôi trồng, nâng cao giá trị Nông Nghiệp, mang lại nhiều thay
        đổi có giá trị hơn cho người Việt Nam. Đầu tư cho nghiên cứu và phát
        triển, không ngừng cải tiến kỹ thuật, đó là điều AFFOZ đang làm để theo
        đuổi sứ mệnh giúp bà con nông dân tự động hóa quy trình sản xuất, áp
        dụng các thiết bị công nghệ cao vào nông nghiệp.
      </p>
      <h2 className="about__subtitle">Vì Sao Nên Lựa Chọn AFFOZ</h2>
      <ul>
        <li className="about__list">
          Tối ưu hóa việc quản lý các trang thiết bị trong trang trại giảm thiểu
          sự lãng phí
        </li>
        <li className="about__list">
          Giúp giảm chi phí nhân công, chi phí hao hụt,...qua đó gia tăng lợi
          nhuận
        </li>
        <li className="about__list">
          Giúp khách hàng chủ động hơn trong việc quản lý vận hành trang trại
          của mình
        </li>
        <li className="about__list">
          AFFOZ cho phép bạn truy cập vào dữ liệu trang trại bất cứ lúc nào từ
          điện thoại, laptop, máy tính bảng,... mà không cần phải đến trang trại
        </li>
        <li className="about__list">
          Giúp chủ trang trại chủ động hơn trong việc nhận biết các rủi ro để
          đưa ra các biện pháp can thiệp kịp thời nhằm giải quyết tối đa để giảm
          tối thiểu thiệt hại nhờ vào 3 loại sensor: nhiệt độ, ánh sáng, độ ẩm
          được lắp đặt trên Sky-board
        </li>
        <li className="about__list">
          Giao diện phần mềm thân thiện người dùng, dễ dàng sử dụng nhưng vẫn
          đảm bảo các tính năng của mình. Trình quản lý gồm có: Report, Task,
          Permission
        </li>
        <li className="about__list">
          Được nghiên cứu - sản xuất - lắp ráp tại Việt Nam giúp giảm thiểu giá
          thành nhưng vẫn đảm bảo chất lượng
        </li>
        <li className="about__list">
          Tạo nên hệ sinh thái nông nghiệp khép kín trên phần mềm giữa: Farmer -
          Engineer - Investor.
        </li>
        <li className="about__list">
          Phù hợp với đa dạng quy mô và các ngành nghề khác nhau
        </li>
      </ul>
    </div>
  );
}
