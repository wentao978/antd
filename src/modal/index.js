import React from 'react'
import { Modal, Button } from 'antd';

class LocalizedModal extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    confirm = () => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Bla bla ...',
            okText: 'OK',
            cancelText: 'Cancel',
        });
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Show Modal</Button>
                <Modal title="Modal" visible={this.state.visible}
                       onOk={this.handleOk} onCancel={this.handleCancel}
                       okText="OK" cancelText="Cancel"
                >
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                </Modal>
                <br/>
                <Button onClick={this.confirm}>confirm</Button>
            </div>
        );
    }
}

export default LocalizedModal;