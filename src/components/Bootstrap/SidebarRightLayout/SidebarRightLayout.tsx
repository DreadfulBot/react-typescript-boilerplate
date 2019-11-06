import React, { PureComponent, Fragment } from "react";
import { Row, Col } from "reactstrap";
import "./SidebarRightLayout.scss";

interface SidebarRightLayoutProps {
  sidebar: JSX.Element;
  pagination: JSX.Element;
  main: JSX.Element;
  sidebarClassName?: string;
  paginationClassName?: string;
  mainClassName?: string;
}

class SidebarRightLayout extends PureComponent<SidebarRightLayoutProps> {
  static defaultProps = {
    main: null,
    sidebar: null,
    pagination: null,
    sidebarClassName: null,
    paginationClassName: null,
    mainClassName: null
  };

  renderMain = (main: JSX.Element, mainClassName?: string) => {
    return main ? (
      <Col
        lg={{ size: 9, order: 1 }}
        sm={{ size: 12, order: 2 }}
        xs={{ size: 12, order: 2 }}
      >
        <div className={mainClassName}>{main}</div>
      </Col>
    ) : null;
  };

  renderPagination = (pagination: JSX.Element, paginationClassName?: string) => {
    return pagination ? (
      <Col>
        <div className={paginationClassName}>{pagination}</div>
      </Col>
    ) : null;
  };

  renderSidebar = (sidebar: JSX.Element, sidebarClassName?: string) => {
    return sidebar ? (
      <Col
        lg={{ size: 3, order: 2 }}
        sm={{ size: 12, order: 1 }}
        xs={{ size: 12, order: 1 }}
      >
        <div className={sidebarClassName}>{sidebar}</div>
      </Col>
    ) : null;
  };

  render() {
    const {
      sidebar,
      sidebarClassName,
      pagination,
      paginationClassName,
      main,
      mainClassName
    } = this.props;

    return (
      <Fragment>
        <Row>
          {this.renderSidebar(sidebar, sidebarClassName)}
          {this.renderMain(main, mainClassName)}
        </Row>
        <Row>{this.renderPagination(pagination, paginationClassName)}</Row>
      </Fragment>
    );
  }
}

export default SidebarRightLayout;
