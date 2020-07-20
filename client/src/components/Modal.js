import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen, closeModal} = value;
                    const {images, user_has_liked, likes, comments} = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                        <ModalContainer>
                            <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-centre">
                                    <h5>You liked this photo!</h5>
                                    <img src={images.standard_resolution.url} alt="modal" className="img-fluid" />
                                       <h5>{likes.count}<i className="fas fa-heart"></i></h5>
                                    <h5>{comments.count}<i className="fas fa-cloud"></i></h5>
                                    <Link to='/'>
                                        <ButtonContainer onClick={()=>closeModal()}>
                                                Main Page
                                        </ButtonContainer>
                                    </Link>
                                        
                                </div>
                            </div>                             
                            </div>
                        </ModalContainer>
                        )
                    } 
                }}
            </ProductConsumer>
        );
    }
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}
`;
export default Modal;