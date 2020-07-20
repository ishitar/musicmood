import React, { Component } from 'react';
import { data } from './response';

const ProductContext = React.createContext("hello");
//Provider
//Consumer
//Setting up context API so that info can be used globally instead of prop drilling


class ProductProvider extends Component {
    state = {
        products: [],
        details: [],
        likes: [],
        modalOpen:false,
        modalProduct:[]
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let products = []
        data.forEach(item=>{
            const single = {...item};
            products = [...products, single];

        })
        this.setState(()=>{
            return {products} 
        })
        //this.setState({products:products}) why??
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }
    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return ({details:product})
        })
    }
    addToLiked = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.user_has_liked = true;
        product.likes.count = product.likes.count+1;
        this.setState(()=>{
            return {products:tempProducts, likes:[...this.state.likes, product]};
        },()=>{
            console.log(this.state);
        });
    };
    openModal = id=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modelProduct:product,modalOpen:true}
        })
    }
    closeModal = () =>{
        this.setState({modalOpen:false})
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToLiked: this.addToLiked,
                openModal:this.openModal,
                closeModal:this.closeModal
            }}>                
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };