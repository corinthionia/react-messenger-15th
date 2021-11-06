import styled from 'styled-components';
import {
  FcEngineering,
  FcSpeaker,
  FcMoneyTransfer,
  FcApprove,
  FcLock,
} from 'react-icons/fc';

import Template from '../components/template/Template';
import NavigationBar from '../components/template/NavigationBar';

const Setting = () => {
  const settingMenu = [
    { id: 'menu1', title: 'General', icon: <FcEngineering /> },
    { id: 'menu2', title: 'Notifiactions', icon: <FcSpeaker /> },
    { id: 'menu3', title: 'Payments', icon: <FcMoneyTransfer /> },
    { id: 'menu4', title: 'Profile', icon: <FcApprove /> },
    { id: 'menu5', title: 'Privacy', icon: <FcLock /> },
  ];
  return (
    <Template
      header={<Title>Setting</Title>}
      content={settingMenu.map((menu) => (
        <Box key={menu.id}>
          <Wrapper>
            <Icon>{menu.icon}</Icon>
            <MenuTitle> {menu.title}</MenuTitle>
          </Wrapper>
        </Box>
      ))}
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

const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 1rem;
`;

const Wrapper = styled.section`
  height: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;

  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;

  margin-top: 2.5rem;
`;

const MenuTitle = styled.span`
  margin-top: 2.5rem;
`;

export default Setting;
