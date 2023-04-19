import Logo from '~/assets/Logo.png';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-t from-[#f8d88f] to-[#e6f2ff] py-8'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img alt='logo' src={Logo} />
          <p className='my-5'></p>
          <p>© PM-TRAVEL đã mua bản quyền .</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Massa orci senectus</p>
          <p className='my-5'>Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Liên hệ với chúng tôi</h4>
          <p className='my-5'>Tempus metus mattis risus volutpat egestas.</p>
          <p>(+84)869908864</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;