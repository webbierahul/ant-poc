import React from "react";
import HeaderTop from "./components/common/HeaderTop";
import HeaderNav from "./components/common/HeaderNav";
import GetCountries from "./components/GetCountries";
import "./App.css";
import Layout from "antd/lib/layout/layout";
import { Divider } from "antd";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const errorLink = onError(({graphqlErrors, networkError})=>{
    if(graphqlErrors){
        graphqlErrors.map(({message, location, path})=>{
            alert(`graphql error $(message)`);
        });
    }
});
const link = from([
    errorLink,
    new HttpLink({uri:"https://countries.trevorblades.com/"}),
]);
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
})
const App = () => (
    <ApolloProvider client={client}>
        <Layout className="main-layout">
            <HeaderTop />
            <Divider style={{ margin: 0 }} />
            <HeaderNav />
        </Layout>
        <GetCountries/>
    </ApolloProvider>
);

export default App;
