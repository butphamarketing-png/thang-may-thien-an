import React from "react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-secondary">THIÊN ÂN</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Giải pháp thang máy toàn diện. An toàn, chuyên nghiệp, uy tín hàng đầu tại TP.HCM và các tỉnh lân cận.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Liên kết</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-secondary transition-colors">Trang chủ</a></li>
              <li><a href="#products" className="text-white/70 hover:text-secondary transition-colors">Sản phẩm</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">Dịch vụ</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-secondary transition-colors">Dự án</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Dịch vụ</h4>
            <ul className="space-y-3">
              <li className="text-white/70">Lắp đặt thang máy</li>
              <li className="text-white/70">Bảo trì định kỳ</li>
              <li className="text-white/70">Sửa chữa 24/7</li>
              <li className="text-white/70">Nâng cấp & Cải tạo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Thông tin</h4>
            <ul className="space-y-3">
              <li className="text-white/70">Hotline: 0967 159 147</li>
              <li className="text-white/70">Email: info@thangmaythienan.vn</li>
              <li className="text-white/70">ĐC: Nguyễn Ảnh Thủ, Trung Mỹ Tây, Quận 12, TP.HCM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm">
            © 2024 Thang Máy Thiên Ân. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
