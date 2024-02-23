import styled from "styled-components";

const FooterComp = styled.footer`
  width: 100%;
  background-color: #303030;
  .footer {
    padding-top: 30px;
    .copyright {
      color: #fff;
      text-align: right;
      padding-bottom: 3%;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterComp>
        <div className="footer">
          <div className="copyright">
            CopyRight © 2024 Hwang SeonYoung All Rights Reserved.
          </div>
        </div>
      </FooterComp>
    </>
  );
};

export default Footer;
