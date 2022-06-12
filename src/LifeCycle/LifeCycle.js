import React, { Children, Component } from 'react'
import Child from './Child';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            objectLike: {
                like: 1
            }
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //tiền xử lý state trước khi render 
        console.log('getDerivedStateFromProps');
        return null
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        return true;
    }
    render() {
        console.log(this.state.objectLike);

        console.log('render')
        return (
            <div className='container'>
                number : {this.state.number}
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                {this.state.objectLike.like >3 ? '' : <Child like={this.state.objectLike} /> }
                <button className='btn btn-danger' onClick={() => {
                    //oxxx {xxy:1} 
                    let newObjectLike = {...this.state.objectLike};
                    newObjectLike.like += 1;

                    this.setState({ objectLike: newObjectLike});
                }}>Like</button>

                <button className='btn btn-danger' onClick={() => {
                    //oxxx {xxy:1} 
                    let newObjectLike = {...this.state.objectLike};
                    newObjectLike.like -= 1;

                    this.setState({ objectLike: newObjectLike});
                }}>-Like</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
    }
}
