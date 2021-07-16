
import React from 'react';
import { Input } from "antd";

const { Search } = Input;
const onSearch = value => {console.log(value)};
function SearchBox(){
    return(<Search placeholder="Search" allowClear onSearch={onSearch}/>);
}

export default SearchBox;