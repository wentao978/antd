import React from 'react';
import {Button, notification} from 'antd';

class Notice extends React.Component {
    constructor(prop) {
        super(prop);
    }

    openNotification = () => {
        notification.open({
            placement:'bottomRight',
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        })
    }

    openNotificationWithIcon = (type) => {
        notification[type]({
            placement:'bottomRight',
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.openNotification}>Open the notification box</Button><br/>
                <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button><br/>
                <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button><br/>
                <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button><br/>
                <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
            </div>
        );
    }
}
export  default  Notice;