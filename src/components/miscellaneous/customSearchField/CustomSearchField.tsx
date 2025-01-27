import styled from 'styled-components';

import { AutocompleteGeo } from './AutocompleteGeo';

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CustomSearchField = () => {
  return (
    <SearchContainer>
      <AutocompleteGeo />
    </SearchContainer>
  );
};
