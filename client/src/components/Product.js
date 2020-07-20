import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const {id, images, created_time, user_has_liked, likes, comments} = this.props.product;
     
        const dateObj = new Date( {created_time}*1000 );
      
        const utcString = dateObj.toUTCString(); 
		const {time} = utcString.slice(5,11);
       
    
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                
                <div className="card">
                    <ProductConsumer>
                        {value=>(
                            <div className="img-container p-5" onClick={()=>{
                                value.handleDetail(id);
                            }}>
                                <Link to="/details">                           
                                    <img src={images.standard_resolution.url} alt="product" className="card-img-top"/>                            
                                </Link>
                                <button 
                                className="cart-btn mb-0" 
                                disabled={user_has_liked ? true : false} 
                                onClick={()=>{
                                    value.addToLiked(id);
                                    value.openModal(id);
                                    console.log("Added in liked!");}}>
        
                                {user_has_liked ? (
                                    <p className="text-capitalize mb-0" disabled> 
                                    {"  "}
                                    Is liked
                                    </p>
                                    ) : (
                                    <i className="fas fa-heart"/>
                                    )}
                                    </button>
                            </div>
                        
                        
                        )}

            
                    
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                            
                            <h5 className="card-footer-comments">{comments.count} <i className="fas fa-comments"/><span className="ml-1"></span></h5>
                            <h5 className="card-footer-likes">{likes.count} <i className="fas fa-heart"/>
                            <span className="mr-1"></span>
                            </h5>
                        </div>
                </div>
                
            </ProductWrapper>
        );
    }
}

export default Product;
Product.propTypes = {
    product: PropTypes.shape({
        //images, created_time, user_has_liked, likes, comments
        id:PropTypes.string,
        images:PropTypes.object,
        created_time:PropTypes.string,
        user_has_liked:PropTypes.bool,
        likes:PropTypes.object,
        comments:PropTypes.object
    })
}
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:1s linear;
}
.card-img-top {
    height: 12vw;
    object-fit: cover;
    transition:0.4s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    overflow:hidden;
    position:relative;
}
.img-container:hover .card-img-top{
transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    left:0.5rem;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    border-radius:0.5rem;
    font-size:1.2rem;
    transform:translate(0,100%);
    transition:all 0.5s linear;
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color:var(--mainRed);
    cursor:pointer;
}
.card-footer-likes{
    color:var(--mainRed);
}
.card-footer-comments{
    color:var(--lightBlue);
}
`