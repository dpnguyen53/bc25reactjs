import React, { Component, PureComponent } from 'react'

//PureComponent: giống hệt class Component tuy nhiên không có lifecycle shouldComponentUpdate và PureComponent tự xử lý nhận biết props (nếu thay đổi thì render nếu không thay đổi thì không render).
// Tuy nhiên PureComponent chỉ so sánh được các trị props là primitive value (number,string,boolean,null,undefined) -> shallow compare. Đối với reference value (object, array, function) thì PureComponent không nhận biết được.
export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state ={};

        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //tiền xử lý state trước khi render 
        console.log('getDerivedStateFromProps child');
        return null
    }

    // shouldComponentUpdate(newProps,newState) {
    //     //newProps: là props sau khi thay đổi và trước khi render
    //     //newState: là state sau khi setState trước render
    //     console.log('shouldComponentUpdate child');
    //     console.log('this.props',this.props);
    //     console.log('newProps',newProps);
    //     if(this.props.like !== newProps.like) {
    //         return true;
    //     }
    //     return false;
    // }

  render() {
    console.log('renderchild')
    return (
      <div className='p-3 text-center bg-dark text-white'>
        <h3>Child component</h3>
        <h3 className='text-left'>
            Like: {this.props.like.like}
        </h3>
      </div>
    )
  }

  timeout;

  componentDidMount(){

   this.timeout = setInterval(() => {
        console.log(123);
    },1000)


    console.log('componentDidMount child');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate child');
  }

  componentWillUnmount() {
    //Trước khi component mất khỏi giao diện hàm này sẽ chạy
    //Nhiệm vụ xoá tất cả các nghiệp vụ chạy ngầm của component tại đây
    if(this.timeout){
        clearInterval(this.timeout);
    }
  }

}
