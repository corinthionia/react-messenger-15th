import styled from 'styled-components';
import { FiBarChart, FiBatteryCharging, FiWifi } from 'react-icons/fi';
import moment from 'moment';

const StatusBar = () => {
  return (
    <Wrapper>
      <LeftStatusBar>{moment().format('HH:mm')}</LeftStatusBar>
      <RightStatusBar>
        <FiBarChart />
        <FiWifi />
        <FiBatteryCharging />
      </RightStatusBar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 2.5%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftStatusBar = styled.span`
  font-size: 0.75rem;
  margin: 0.5rem;

  display: flex;
  justify-content: space-evenly;
`;

const RightStatusBar = styled.span`
  width: 17.5%;
  font-size: 0.75rem;

  display: flex;
  justify-content: space-evenly;
`;

export default StatusBar;
