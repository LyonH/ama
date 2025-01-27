import React, { useRef, useState } from 'react';

const Hamburger = (props) => {

  const checkBoxRef = useRef(null);

  const [after51, setAfter51] = useState(false);

  const handleOnClick = (sec) => {
    let secNum = parseInt(sec[1], 10);
    checkBoxRef.current.checked = false;
    props.handleNavIndex(secNum);
  };

  const addWhiteToLink = (index) => {
    if (index === props.currentSection) {
      return "hamburger__link white";
    } else {
      return "hamburger__link";
    }
  };

  const addWhiteToBull = (index) => {
    if (index === props.currentSection) {
      return "bull background_white";
    } else {
      return "bull";
    }
  };

  const showContent = () => {
    if (props.isMobile) {
      return (
        <ul className="hamburger__list">
          <li className="hamburger__item">
            <div className={addWhiteToLink(0)} onClick={() => handleOnClick("s1")}><span>首頁</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(1)} onClick={() => handleOnClick("s2")}>
              <span>你是哪裡人？</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(2)} onClick={() => handleOnClick("s3")}>
              <span>你怎麼看兩岸關係？</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(3)} onClick={() => handleOnClick("s4")}>
              <span>對台灣的愛恨情仇？</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(4)} onClick={() => handleOnClick("s5")}>
              <span>高中職生對政治冷感嗎？</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(5)} onClick={() => handleOnClick("s6")}>
              <span>調查結果，他們怎麼看？</span></div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="hamburger__list">
          <li className="hamburger__item">
            <div className={addWhiteToLink(0)} onClick={() => handleOnClick("s1")}><span>首頁</span><span className={addWhiteToBull(0)}>&nbsp;</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(1)} onClick={() => handleOnClick("s2")}><span>你是哪裡人？</span><span className={addWhiteToBull(1)}>&nbsp;</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(2)} onClick={() => handleOnClick("s3")}><span>你怎麼看兩岸關係？</span><span className={addWhiteToBull(2)}>&nbsp;</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(3)} onClick={() => handleOnClick("s4")}><span>對台灣的愛恨情仇？</span><span className={addWhiteToBull(3)}>&nbsp;</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(4)} onClick={() => handleOnClick("s5")}><span>高中職生對政治冷感嗎？</span><span className={addWhiteToBull(4)}>&nbsp;</span></div>
          </li>
          <li className="hamburger__item">
            <div className={addWhiteToLink(5)} onClick={() => handleOnClick("s6")}><span>調查結果，他們怎麼看？</span><span className={addWhiteToBull(5)}>&nbsp;</span></div>
          </li>
        </ul>
      );
    }
  }

  const handleOnChange = (e) => {
    if (e.target && e.target.checked) {
      props.isHamburgerOn(true);
    } else {
      props.isHamburgerOn(false);
    }
  };

  return (
    <div className="hamburger">
      <input 
        type="checkbox" 
        className="hamburger__checkbox" 
        id="navi-toggle" 
        ref={checkBoxRef}
        onChange={handleOnChange}
      />
      <label htmlFor="navi-toggle" className="hamburger__button">
        <span className="hamburger__icon">&nbsp;</span>
      </label>
      <div className="hamburger__background">&nbsp;</div>
      <nav className="hamburger__nav">
        {showContent()}
      </nav>
    </div>
  );
}

export default Hamburger;