import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries{
      name
      code
      emoji
      currency
      phone
      languages{
        name
        native
      }
      capital
      continent{
        name
      }
    }
  }
`;