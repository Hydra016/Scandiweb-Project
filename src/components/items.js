import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import product from './Product D.png';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import {graphql} from '@apollo/react-hoc';


const getAllItems = gql `
    {
        category {
            name
            products {
              name
              inStock
              gallery
              description
              category
              brand
              attributes {
                name
                items {
                  value
                }
              }
            }
          }              
    }
`

class Items extends React.Component {
    displayData() {
        const data = this.props.data;
        if(data.loading) {
            return (
                <div>loading...</div>
            ) 
        } else {
            return this.props.data.category.products.map(el => {
                console.log(el)
                return (
                    <div className="box">
                <div className="box_image">
                    <img className="img" src={el.gallery[0]} alt="" />
                        <Link to="/scandiwebproject/item/:id" className="cart_link" href="#">
                            <div className="box_cart">
                            <FiShoppingCart className="cart_icon cart_icon_align" />
                        </div>
                        </Link>
                </div>
                    <h2 className="box_item box_title">{el.name}</h2>
                    <p className="box_item box_price">$50.00</p>
            </div>
                )
            })
        }
    }

    render() {
            // console.log(this.props.data)

        return (
            <div>
            <div className="heading">
            <h1>Category name</h1>
            </div>
            <div className="content">
            {
                this.displayData()
            }
            </div>            
            </div>
        );
    }
}

export default graphql(getAllItems)(Items);