import React, { PureComponent, Fragment } from "react";
import { Row, Col } from "reactstrap";
import "./SidebarRightLayout.scss";

interface SidebarRightLayoutProps {
  sidebar: JSX.Element;
  pagination: JSX.Element;
  main: JSX.Element;
}

class SidebarRightLayout extends PureComponent<SidebarRightLayoutProps> {
  static defaultProps = {
    main: null,
    sidebar: null,
    pagination: null
  };

  renderMain = (main: JSX.Element) => {
    return main ? (
      <Col
        lg={{ size: 9, order: 1 }}
        sm={{ size: 12, order: 2 }}
        xs={{ size: 12, order: 2 }}
      >
        <Row>{main}</Row>
      </Col>
    ) : null;
  };

  renderPagination = (pagination: JSX.Element) => {
    return pagination ? <Col>{pagination}</Col> : null;
  };

  renderSidebar = (sidebar: JSX.Element) => {
    return sidebar ? (
      <Col
        lg={{ size: 3, order: 2 }}
        sm={{ size: 12, order: 1 }}
        xs={{ size: 12, order: 1 }}
      >
        {sidebar}
      </Col>
    ) : null;
  };

  render() {
    const { sidebar, pagination, main } = this.props;

    return (
      <Fragment>
        <Row>
          {this.renderSidebar(sidebar)}
          {this.renderMain(main)}
        </Row>
        <Row>{this.renderPagination(pagination)}</Row>
      </Fragment>
    );
  }
}

export default SidebarRightLayout;
