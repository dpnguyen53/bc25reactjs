import React, { Component, createRef } from 'react'

export default class RefDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
        this.userLogin = { username: '', password: '' }
        //Lưu trữ được giá trị sau mỗi lần render => khog6 bị render lại giao diện => Dùng cho form 
        // this.userLoginRef = createRef();
        // this.userLoginRef.current = {
        //     username: '',
        //     password: ''
        // }
    }

    handleChange = (e) => {
        let { value, id } = e.target;
        // this.userLoginRef.current[id] = value;
        // console.log(this.userLoginRef);
        this.userLogin[id] = value;

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.userLoginRef.current)
        console.log(this.userLogin)

    }
    render() {
        console.log(this.userLogin);
        console.log('render');
        return (
            <form className='container' onSubmit={this.handleSubmit}>
                <h3>{this.state.number}</h3>
                <button className='btn btn-success' onClick={() => { this.setState({ number: this.state.number + 1 }) }}>+</button>
                <h3>Ref demo login</h3>
                <div className='form-group'>
                    <p>User name</p>
                    <input className='form-control w-25' id="username" onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <p>Password</p>
                    <input className='form-control w-25' id="password" onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <button type='submit'>Login</button>
                </div>
            </form>
        )
    }
}
