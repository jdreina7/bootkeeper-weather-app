import styled from "styled-components"

import { AutocompleteGeo } from "./AutocompleteGeo";

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .custom-search-icon {
        cursor: pointer;
        margin-left: 0.5em;
    }
`;

export const CustomSearchField = () => {
  return (
    <SearchContainer>
        <AutocompleteGeo />
    </SearchContainer>
  )
}
