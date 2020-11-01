import React from 'react'
import {Input, Row, Col, Card, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import "./styles.css";
import { register, login } from "./action.js"

class LoginView extends React.Component {
    state = {
        users: [
            {username:"Jack", password: "123456", admin:false},
            {username:"admin", password: "admin", admin:true},
        ],
        autoLogin: false,
        user:null,
        userName:"",
        userPassword:"",
        msg:"",
        msgColor:"red",
    }

    render() {
        return (
            <div
                className="login-wrap"
                style={{topMargin: 10}}>
                <div className="padding" />
                <Row align="center">
                    <span style={{color:this.state.msgColor }}>{this.state.msg}</span>
                </Row>
                <Row align="center">
                    <Col>
                        <Card title="Login"
                              style={{textAlign: 'center', width: 400}}>
                            <Input
                                size="large"
                                name = "userName"
                                placeholder="username"
                                prefix={<UserOutlined/>}
                                value={this.state.userName}
                                onChange={this.handleInputChange}
                                />
                            <Input
                                type="password"
                                size="large"
                                placeholder="userpassward"
                                name = "userPassword"
                                prefix={<LockOutlined/>}
                                value={ this.state.userPassword}
                                onChange={this.handleInputChange}/>
                            <Button
                                className="btn"
                                type="primary"
                                size={"large"}
                                style={{margin: 8}}
                                onClick={() => login(this)}>
                                Login
                            </Button>
                            <Button
                                className="btn"
                                type="primary"
                                size={"large"}
                                style={{margin: 8}}
                                onClick={() => register(this)}>
                                Sign up
                            </Button>
                            <br/>
                            <a className="forget">Don't remember the password?</a>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // console.log(value);
        this.setState({
            [name]: value
        });
    };
}


export default LoginView;