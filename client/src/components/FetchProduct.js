import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FetchProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }

    }   

    componentDidMount() {
        this.fetchData();

    }

    fetchData = () =>{
        fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=8609428110.1677ed0.bb1ab8b878cc45a28d30d474b71fca5d')
        .then(result => result.json())
        .then(res => res.data.map(post => (
            {
                created_time : `${post.created_time}`,
                images:`${post.images.standard_resolution.url}`,
                user_has_liked:`${post.user_has_liked}`, 
                likes:`${post.likes}`, 
                comments:`${post.comments}`
            }
        )))
        .then(products=>
            this.setState({products:products})
            )                     
        
}

    render() {
        return (
            <React.Fragment>
                {this.state.products}
            </React.Fragment>
        );
    }
}


export default FetchProduct;