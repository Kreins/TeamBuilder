import React, { Component } from "react";
import { Layout, Modal, Image, Tooltip, Button } from "antd";
import { Link } from "react-router-dom";
import {
  LogoutOutlined,
  UserOutlined,
  PlusOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./index.css";
import CreateTeamForm from "./CreateTeamForm";
import profilePic from "./profile_pic.jpg";
export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      collapsed: true,
    };
  }
  toggleCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  openModal = () => {
    this.setState({ modalVisible: true });
  };
  handleOk = () => {
    this.setState({ modalVisible: false });
  };
  handleCancel = () => {
    this.setState({ modalVisible: false });
  };
  render() {
    const { image } = this.props;
    const { Sider } = Layout;

    return (
      <div>
        <Modal
          title="New Team"
          onCancel={this.handleCancel}
          onOk={this.handleCancel}
          centered
          visible={this.state.modalVisible}
          footer={[
            <Button key="Cancel" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button type="primary" onClick={this.handleOk} key="Submit">
              Submit
            </Button>,
          ]}
        >
          <CreateTeamForm />
        </Modal>
        <Sider
          className="sideBar theme-background-color"
          width={120}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggleCollapsed}
          collapsedWidth={0}
        >
          <div className="sb-profilePictureContainer">
            <Image src={profilePic} alt="profile picture" />
          </div>
          <div className="sideBarButtons">
            <Tooltip placement="right" title="New Team">
              <PlusOutlined className="sb-btn" onClick={this.openModal} />
            </Tooltip>

            <Link to={"/Profile"}>
              <Tooltip placement="right" title="Profile">
                <UserOutlined className="sb-btn" />
              </Tooltip>
            </Link>

            <Link to={"/Home"}>
              <Tooltip placement="right" title="My Courses">
                <HomeOutlined className="sb-btn" />
              </Tooltip>
            </Link>

            <Link to={"/"}>
              <Tooltip placement="right" title="Logout">
                <LogoutOutlined className="sb-btn" />
              </Tooltip>
            </Link>
          </div>
        </Sider>
      </div>
    );
  }
}
