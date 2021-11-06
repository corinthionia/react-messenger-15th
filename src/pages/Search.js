import styled from 'styled-components';

import Template from '../components/template/Template';
import NavigationBar from '../components/template/NavigationBar';
import SearchUser from '../components/search/SearchUser';

const Search = () => {
  return (
    <Template
      header={<Title>Search</Title>}
      content={<SearchUser />}
      background={false}
      bottom={<NavigationBar />}
    />
  );
};

const Title = styled.span`
  margin: 2rem 2rem 0 1rem;

  font-size: 2rem;
  font-weight: 600;
`;

export default Search;
