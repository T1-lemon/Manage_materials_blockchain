// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProductFactory {

    event SubmitProduct(Product product, uint indexed index);

    struct Product {
        string id;
        string code;
        string name;
        string agency;
        string number;
        string price;
        string dueDate;
        string category;
        string description;
        string employee; 
    }

    Product[] public products;

    function createProduct(Product memory product) public {
        products.push(product);
        uint index = products.length; 
        emit SubmitProduct(product, index);
    }

    function getAllProduct() public view returns (Product[] memory) {
        Product[] memory result = new Product[](products.length);
        for (uint i = 0; i < products.length; i++) {
            result[i] = products[i];
        }
        return result;
    }

    function updateProduct(Product memory product, uint index) public {
        products[index] = product;
        emit SubmitProduct(product, index+1);
    }
}
