import React from 'react';
import {AiOutlineFacebook, AiOutlineMail, AiOutlineYoutube} from 'react-icons/ai';
import './style.scss';

const Footer: React.FC = () => {
  return (
    <div className={'footer d-flex primary-content'}>
      <div className={'ml4 mr-auto'}>
        <p className={'text-bold'}>Liên hệ</p>
        <a href={'/'}>
          <AiOutlineFacebook color={'gray'} size={'50px'}/>
        </a>
        <a href={'/'}>
          <AiOutlineMail color={'gray'} size={'50px'}/>
        </a>
        <a href={'/'}>
          <AiOutlineYoutube color={'gray'} size={'50px'}/>
        </a>
      </div>
      <div className={'ml-auto mr4 d-flex item-align-center'}>
        <img src={'Tmath_logo.png'} alt={'Tmath - Coding Academy'}/>
        <div className={'mt8'}>
          <p className={'text-bold'}>Tmath - Coding Academy</p>
          <p>Nơi nuôi dưỡng và đào tạo tài năng trẻ</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;