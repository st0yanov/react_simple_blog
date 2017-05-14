import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

export default class Menu extends React.Component {
  render() {
    return (
      <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
          <NavItem>
            <Glyphicon glyph="home"/> Начало
          </NavItem>
        </IndexLinkContainer>

        <LinkContainer to="/posts">
          <NavItem>
            <Glyphicon glyph="documents"/> Статии
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/posts/new">
          <NavItem>
            <Glyphicon glyph="plus-sign"/> Добави статия
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}
