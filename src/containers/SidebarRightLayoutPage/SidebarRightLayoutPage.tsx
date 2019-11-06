import React, { Fragment } from "react";
import { Container } from "reactstrap";

import SidebarRightLayout from "../../components/Bootstrap/SidebarRightLayout/SidebarRightLayout";
import LargeNavbar from "../../components/Bootstrap/LargeNavbar/LargeNavbar";

import constants from "./constants";
import styles from "./SidebarRightLayoutPage.module.scss";

class SidebarRightLayoutPage extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Fragment>
        <LargeNavbar className={styles.navbar_top} />
        <Container>
          <SidebarRightLayout
            main={<p>{constants.loremText}</p>}
            mainClassName={styles.main}
            pagination={<p>{constants.loremText}</p>}
            paginationClassName={styles.pagination}
            sidebar={<p>{constants.loremText}</p>}
            sidebarClassName={styles.sidebar}
          />
        </Container>
      </Fragment>
    );
  }
}

export default SidebarRightLayoutPage;
