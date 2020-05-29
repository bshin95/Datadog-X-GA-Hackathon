import React from "react"
import styled from "styled-components"

const SearchContainer = styled.div`
  padding: 2rem;
`

const SearchBar = styled.input`
  width: 800px;
  text-align: left;

  @media (max-width: ${(props) => props.theme.tablet}) {
    width: 728px;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 330px;
  }
`

const SearchInput = ({ onChange }) => (
  <SearchContainer>
    <SearchBar
      placeholder="Please search for an employee"
      onChange={onChange}
    />
  </SearchContainer>
)

export default SearchInput
