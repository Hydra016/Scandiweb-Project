import gql from "graphql-tag";

export const getAllItems = gql`
  {
    category {
      name
      products {
        id
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
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const getSingleItem = (id) => gql`
    {
        product(id: "${id}") {
            id
            name
            inStock
            description
            gallery
            attributes {
              id
              name
              type
              items {
                id
                value
              }
            }
            prices {
              currency {
                label
                symbol
              }
              amount
            }
            brand
          }
    }
`;

export const getItemsByCategory = (cat) => gql`
{
  category(input:{title: "${cat}"}) {
    name
    products {
      id
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
      prices {
    currency {
      label
      symbol
    }
    amount
  }
    }
  } 
}
`;
