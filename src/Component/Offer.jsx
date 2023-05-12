import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <>
      <div className="banner-offer">
        <img
          src="https://www.sedonavietnam.com/wp-content/uploads/2017/11/Best-Available-Rates.jpg"
          alt=""
          width="100%"
        />
      </div>
      <div className="container main-offer">
        <div className="content-offer">
          <h4>GIÁ TỐT NHẤT CÓ SẴN</h4>
          <p>Tận hưởng mức giá tốt nhất của chúng tôi quanh năm.</p>
          <ul>
            <li>Wifi miễn phí</li>
            <li>Dọn phòng hàng ngày</li>
          </ul>
          <p>
            Vui lòng gửi email cho chúng tôi qua yêu cầu@sedonavietnam.com hoặc
            gọi cho chúng tôi qua số điện thoại +84 28 3822 9888.
          </p>

          <h4>GIƯỜNG & ĂN SÁNG TRÊN SKY</h4>
          <p>Gói từ VND 3,275,000++ mỗi đêm</p>
          <p>Tỷ lệ bao gồm:</p>
          <ul>
            <li>Ăn sáng hàng ngày cho 2 người tại SKY28.</li>
            <i>Điều khoản và điều kiện:</i>
            <ul>
                <li>Có hiệu lực đến ngày 31 tháng 5 năm 2023</li>
                <li>Yêu cầu thanh toán trước toàn bộ tiền đặt cọc không hoàn lại khi đặt phòng</li>
                <li>Khuyến mãi chỉ áp dụng cho các đặt phòng mới</li>
                <li>Không áp dụng đồng thời với các chương trình khuyến mãi khác</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offer;
