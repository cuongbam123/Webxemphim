export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Web Xem Phim</h2>
          <p className="text-sm">© 2025 WebXemPhim. All rights reserved.</p>
        </div>
        <nav className="space-x-4">
          <a href="/" className="hover:text-white">Trang chủ</a>
          <a href="/lich-chieu" className="hover:text-white">Lịch chiếu</a>
          <a href="/lien-he" className="hover:text-white">Liên hệ</a>
        </nav>
      </div>
    </footer>
  );
}
