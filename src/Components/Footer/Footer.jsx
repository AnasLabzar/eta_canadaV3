import React from 'react';
import logo from '../../Assets/img/logo.png'
import { useModal } from 'react-hooks-use-modal';
import CloseSvg from '../../Assets/img/x-solid.svg'

function Footer() {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  const [Modal2, open2, close2, isOpen2] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  return (
    <div className='bg-[#b10007] w-full h-full py-10'>
      <div className='mx-auto max-w-[1320px] text-center'>
        <img src={logo} className="w-[14em] mx-auto" />
        <div className="soufooter w-full flex mx-auto pt-[34px] pb-[20px] border-b border-white">
          <ul className='flex gap-10 text-center mx-auto text-white'>
            <li>
              <button onClick={open}>
                Terms and Condition
              </button>
              <Modal>
                <div className='bg-white w-72 h-52 py-4 px-6'>
                  <button onClick={close} className="absolute right-4 top-4">
                    <img className='w-6 h-6' src={CloseSvg} alt="" />
                  </button>
                  Hello
                </div>
              </Modal>
            </li>
            <li>Terms and Condition</li>
            <li>Terms and Condition</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
        <span className='mt-5 text-white text-sm flex justify-center'>All  right reserved</span>
      </div>
    </div>
  )
}

export default Footer