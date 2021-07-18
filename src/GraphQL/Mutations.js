import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
    mutation createUser($firstname: String! $lastname: String! $email: String! $password: String!){
        creatUser(firstname: $firstname){

        }
    }
`;
