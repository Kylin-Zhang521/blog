import React, { Component } from 'react'
import { Layout, Dropdown, Menu,Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import {withRouter} from 'react-router'
// import store from '../../redux/store';
import {connect} from "react-redux"
const { Header } = Layout;

class TopHeader extends Component {

    state = {
        collapsed: false,
    }

    // 生成action


    toggle = (isCollapsed) => {
        //发布者
        // store.dispatch(this.actionCreator(isCollapsed));
        this.props.actionCreator(isCollapsed)

        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    exit = ()=>{
        localStorage.setItem("isLogin",false)
        localStorage.setItem("users",JSON.stringify({}))
        //重定向
        this.props.history.push("/login")
        // window.location.reload()
    }

    render() {
        //权限信息，登录用户信息
        var roleName = JSON.parse(localStorage.getItem("users")).roleName
        var username = JSON.parse(localStorage.getItem("users")).username
        const menu = (
            <Menu>
              <Menu.Item>
                <div>{roleName}</div>
              </Menu.Item>
              <Menu.Item>
                <div onClick={this.exit}>退出</div>
              </Menu.Item>
            </Menu>
        );

        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })} */}
                {
                    this.state.collapsed ?
                        <MenuUnfoldOutlined onClick={()=>this.toggle(false)} className="trigger" />
                        :
                        <MenuFoldOutlined onClick={()=>this.toggle(true)} className="trigger" />
                }

                <div style={{float:"right",margin:'0px 16px'}}>
                    欢迎{username}回来
                    <Dropdown overlay={menu} >
                        <Avatar size={'large'} icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </Header>
        )
    }
}
const mapStateToProps= ()=>{
    return {

    }
}// state映射 成属性用

const mapDispathToProps = {
    actionCreator:(isCollapsed)=>{
        //ajax 业务， 动态计算action
        return {
            type:"MySideMenuCollapsed",
            payload:isCollapsed
        }
    }
} //方法映射成属性用

export default withRouter(connect(mapStateToProps,mapDispathToProps)(TopHeader))

/*
 var a = <div>111111</div> jsx
 babel-loader

 import React from 'react'
 var a = React.createElement("div",null,"11111111")

*/