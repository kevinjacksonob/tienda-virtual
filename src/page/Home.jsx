import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterProducts, filterProductsName, getProducts } from "../store/slices/products.slices";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [categoryList, setCategoryList] = useState([]);
  const [inputSearch,setInputSearch] = useState('');

  useEffect(() => {
    dispatch(getProducts());
    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategoryList(res.data.data.categories));
  }, []);

  return (
    <div>
      {categoryList.map((category) => (
        <Button
          key={category.id}
          onClick={() => dispatch(filterProducts(category.id))}
        >
          {category.name}
        </Button>
      ))}

      <InputGroup className="mb-3">
        <Form.Control
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button onClick={() => dispatch(filterProductsName(inputSearch))} variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      {products.map((product) => (
        <li>
          <Link to={`/product/${product.id}`}>
            {product.title}
            <img src={product.productImgs[0]} alt="" />
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Home;
