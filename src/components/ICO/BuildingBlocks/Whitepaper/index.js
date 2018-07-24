import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Badge} from 'mdbreact';

const StyledLink = styled.a`
  text-shadow: 0 1px 3px rgba(36,180,126,.4);
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  -webkit-box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  background: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .025em;
  text-decoration: none;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;
  color: #fff;
  background: #00bfff;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Whitepaper = (props, className) => {
  console.log(props.otherLangLinks)
  return (
    <React.Fragment>
      <img src={props.image} alt="Air bastion's white paper image - click to read" />
      <Link push to={props.url}>
        <p>{props.description}</p>
      </Link>
        <div>
        {props.otherLangLinks.map((link) =>
          <a href={link.url} key={link.representation} noopener noreferrer>
            <p>{link.language}</p>
          {link.language.indexOf('Russian') !== -1 &&
            <Badge badgeColor="primary">Most Downloaded</Badge>
            }
          </a>
        )}
        </div>
        <StyledLink href={props.requestUrl} noopener noreferrer>Request for translation</StyledLink>
    </React.Fragment>
  );
}

const StyledH4 = styled.h4`
  color: ;
  shadow: ;
`;

const WhitepaperTable = (props, className) => {
  return (
    <div>
    <StyledH4>Also available in other languages</StyledH4>
    <table>
      <tbody></tbody>
    </table>
    </div>
  );
}

export default Whitepaper;
