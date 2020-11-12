import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Footer(props) {
  const { footerData } = props;

  return (
    <FooterContainer>
      <FooterWrapper>
        <LinkContainer>
          <LinkWrapper>
            <FooterTitle>Link About Me</FooterTitle>
            {footerData?.map(({ title, imgsrc, linksrc }) => (
              <li key={title}>
                <NotionLink href={linksrc}>
                  <span>{title}</span>
                  <img alt="notion portfolio" src={imgsrc} />
                </NotionLink>
              </li>
            ))}
          </LinkWrapper>
          <SpellWrapper>
            <FooterTitle>Assignment of TravelFlan</FooterTitle>
            <li>Issued By Sang Hun Lee</li>
            <li>Phone: +82-10-9208-2770</li>
            <li>
              <span>Mail:</span>
              <a href="mailto:cloudlee711@gmail.com">cloudlee711@gmail.com</a>
            </li>
          </SpellWrapper>
        </LinkContainer>
      </FooterWrapper>
    </FooterContainer>
  );
}

const LinkWrapper = styled.ul`
  li {
    margin: 10px;
  }
`;

const SpellWrapper = styled(LinkWrapper)`
  li {
    font-size: 0.9rem;
    margin: 20px 0;
    &:last-child {
      &:hover {
        transition: color 0.5s ease-in-out;
        color: #fe5b60;
      }
      a {
        &:hover {
          transition: color 0.5s ease-in-out;
          color: #fe5b60;
        }
      }
    }
  }
`;

const FooterTitle = styled.span`
  line-height: 60px;
  font-weight: 600;
  font-family: Helvetica, Tahoma, Arial, sans-serif;
  color: #666;
`;

const FooterContainer = styled.footer`
  height: 30vh;
  width: 100vw;
  margin-top: 20vh;
`;
const FooterWrapper = styled.section`
  width: 85vw;
  margin: auto;
  border-top: 1px solid #d8d8d8;
`;

const LinkContainer = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`;

const NotionLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale3d(1.6, 1.6, 1.6);
  }
`;
