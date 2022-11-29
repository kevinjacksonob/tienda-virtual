import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../store/slices/products.slices';

const ProductId = () => {

  const dispatch = useDispatch();

  const {id} = useParams();


  useEffect(()=> {
    dispatch(getProducts())
  },[])

  const products = useSelector (state => state.products);

  const product = products.find(productDetail => productDetail.id === Number(id));

  const relatedProducts = products.filter(newProduct => newProduct.category.id === product.category.id)


  return (
    <div>
      <h1>{product?.title}</h1>
      <img src={product?.productImgs[0]} alt="" />
      <p>{product?.description}</p>
      <p>$ {product?.price}</p>
      {relatedProducts.map(newsProducts => (
         <li>
            <Link to={`/product/${newsProducts.id}`}>{newsProducts.title}</Link>
         </li>
      ))}
    </div>
  );
};

export default ProductId;