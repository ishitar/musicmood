import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'; 
import {ButtonContainer} from './Button';
import styled from 'styled-components';

class Details extends Component {
    render() {
        return (
            <DetailsWrapper>
            <ProductConsumer>
                {
                    value => {
                        const {id, caption, user, images, created_time, user_has_liked, likes, comments} = value.details;
                        return (
            <div className="container py-5">            
             <div className="row">
               <div className="col">
                   <div className="card"> 
                        <div className="img-container p-5">
                        <img src={images.standard_resolution.url} alt="product" className="card-img-top" />   
                        </div>  
                        <div className="card-footer d-flex justify-content-between">
                            
                            <h5 className="card-footer-comments">{comments.count} <i className="fas fa-comments"/><span className="ml-1"></span></h5>
                            <h5 className="card-footer-likes">{likes.count} <i className="fas fa-heart"/>
                            <span className="mr-1"></span>
                            </h5>
                    </div>        
                    </div>
                </div>
                    
                
               {/* product text */}
               <div className="col">
                 <h2>Caption:</h2>
                 <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                   made by: <span className="text-uppercase">
                     {caption.text}
                   </span>
                 </h4>
                 
                 <p  className="text-capitalize font-weigh-bold mt-3 mb-0">
                  Date posted:
                 </ p>
                 <p className="text-muted lead">
                   {created_time}
                 </p>
                   {/* buttons */}
                 <div>
                  <Link to="/">
                    <ButtonContainer>
                      Back to Home Page
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer 
                  like
                  disabled={user_has_liked ? true : false}
                  onClick={()=>{
                    value.addToLiked(id);
                    value.openModal(id);                    
                  }}
                  >
                    {user_has_liked ? <h2 className="liked-button"><i className="fas fa-heart"/> </h2>: <h2 className="not-liked-button"><i className="fas fa-heart"/></h2>}
                  </ButtonContainer>                  
                 </div>
               </div>
             </div>
            </div>
          
                        )
                    }
                }
            
            </ProductConsumer>
            </DetailsWrapper>
        );
    }
}
const DetailsWrapper = styled.div`
.liked-button{
    color:var(--mainBlue);
}
.not-liked-button{
    color:var(--mainRed);
}
`
export default Details;