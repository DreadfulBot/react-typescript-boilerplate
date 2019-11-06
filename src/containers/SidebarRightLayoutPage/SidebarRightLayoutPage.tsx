import React from 'react';
import SidebarRightLayout from '../../components/SidebarRightLayout';


class SidebarRightLayoutPage extends React.PureComponent<{}, {}> {
    render() {
        return (
            <SidebarRightLayout
                main={<p>main</p>}
                pagination={<p>pagination</p>}
                sidebar={<p>sidebar</p>}
            />
        );
    }
}

export default SidebarRightLayoutPage;