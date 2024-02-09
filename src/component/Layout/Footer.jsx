import styled from "styled-components";

const FooterComp = styled.footer`
  width: 100%;
  background-color: skyblue;
  .container {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p,
    div {
      color: #505050;
    }
    .info {
      line-height: 1.8;
      margin-bottom: 30px;
    }
    .copyright {
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterComp>
        <div className="container">
          <div className="info">
            <p>이름 :Hwang SeonYoung</p>
            <p>전화번호 : 010-4922-2180</p>
            <p>E-Mail : ghkdtjsdud0312@gmail.com</p>
          </div>
          <div className="copyright">
            CopyRight © 2024 Hwang SeonYoung All Rights Reserved.
          </div>
        </div>
      </FooterComp>
    </>
  );
};

export default Footer;
