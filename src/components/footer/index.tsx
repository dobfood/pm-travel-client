import Logo from '~/assets/Logo.png';
import './index.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__addr'>
        <h1 className='footer__logo'>PM-Travel</h1>

        <h2>Liên hệ</h2>

        <address>
          <a className='footer__btn' href='mailto:example@gmail.com'>
            Gửi email cho chúng tôi
          </a>
        </address>
      </div>

      <ul className='footer__nav'>
        <li className='nav__item'>
          <h2 className='nav__title'>Phương tiện truyền thông</h2>

          <ul className='nav__ul'>
            <li>
              <a href='#1'>Facebook</a>
            </li>

            <li>
              <a href='2#'>Instagram</a>
            </li>

            <li>
              <a href='3#'>Github</a>
            </li>
          </ul>
        </li>

        <li className='nav__item nav__item--extra'>
          <h2 className='nav__title'>Công nghệ</h2>

          <ul className='nav__ul nav__ul--extra'>
            <li>
              <a href='#4'>Thiết kế mọi nơi</a>
            </li>

            <li>
              <a href='5#'>Thiết kế yêu cầu </a>
            </li>

            <li>
              <a href='#6'>Số liệu thống kê</a>
            </li>

            <li>
              <a href='7#'>Tự động hóa</a>
            </li>
          </ul>
        </li>

        <li className='nav__item'>
          <h2 className='nav__title'>Hợp pháp</h2>

          <ul className='nav__ul'>
            <li>
              <a href='1#'>Chính sách bảo mật</a>
            </li>

            <li>
              <a href='2#'>Điều khoảng sử dụng</a>
            </li>

          </ul>
        </li>
      </ul>

      <div className='legal'>
        <p>&copy; 2023 PM-Travel. Đã đăng ký bản quyền.</p>

        <div className='legal__links'>
          <span>
             <span className='heart'>♥</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
