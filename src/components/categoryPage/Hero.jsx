// components/Hero.js
import styled from 'styled-components';
import Tlpheader from '../peakpicks/tlpheader/Tlpheader';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat;
  color: #fff;
  background-color: antiquewhite;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const Hero = ({data}) => {
  return (
      <Tlpheader data={data} />
  );
};

export default Hero;
