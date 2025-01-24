import styled from "styled-components"

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { AutocompleteGeo } from "./AutocompleteGeo";

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .custom-search-icon {
        cursor: pointer;
        margin-left: 1em;
    }
`;

export const CustomSearchField = () => {
  return (
    <SearchContainer>
        <AutocompleteGeo />
        <TravelExploreIcon className="custom-search-icon" />
    </SearchContainer>
  )
}
