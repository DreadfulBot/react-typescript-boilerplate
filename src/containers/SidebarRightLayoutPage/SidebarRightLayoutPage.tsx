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
            main={<p className={styles.main}>{constants.loremText}</p>}
            pagination={
              <p className={styles.pagination}>{constants.loremText}</p>
            }
            sidebar={<p className={styles.sidebar}>{constants.loremText}</p>}
          />
        </Container>
      </Fragment>
    );
  }
}

export default SidebarRightLayoutPage;
