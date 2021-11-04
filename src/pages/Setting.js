import styled from 'styled-components';

import Template from '../components/template/Template';
import NavigationBar from '../components/template/NavigationBar';

const Setting = () => {
  return (
    <Template header={<Title>Setting</Title>} bottom={<NavigationBar />} />
  );
};

const Title = styled.span`
  margin: 3rem 2rem 0 2rem;

  font-size: 2rem;
  font-weight: 600;
`;

export default Setting;
