import React from 'react';
import {Button, notification} from 'antd';

class Notice extends React.Component {
    constructor(prop) {
        super(prop);
    }

    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        })
    }

    render() {
        return (<Button type="primary" onClick={this.openNotification}>Open the notification box</Button>);
    }
}
export  default  Notice;