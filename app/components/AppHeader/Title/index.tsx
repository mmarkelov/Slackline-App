import React, { memo } from 'react';
import styled from '../../../styles/styled-components';
import media from '../../../styles/media';
import isaLogo from '../isaLogo.svg';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { touchableOpacity } from 'styles/mixins';

interface Props {}

function Title() {
  const dispatch = useDispatch();

  function goMainPage() {
    dispatch(push(''));
  }
  return (
    <Wrapper>
      <Text display={'desktop'} onClick={goMainPage}>
        Slackline <Linebreak />
        App
      </Text>
      <Text display={'mobile'} onClick={goMainPage}>
        Slackline.App
      </Text>
      <ByWrapper>
        <Divider />
        <span>by</span>
        <Divider />
      </ByWrapper>
      <Logo href={'//www.slacklineinternational.org'} target="_blank">
        <img style={{ width: '100%' }} src={isaLogo} />
      </Logo>
    </Wrapper>
  );
}
const Linebreak = styled.br`
  display: none;
  ${media.desktop`
    display: flex;
  `};
`;

const Logo = styled.a`
  display: flex;
  align-self: center;
  width: 12rem;
  ${media.desktop`
    align-self: flex-start;
    width: 100%;
    /* max-width: inherit; */
  `};
`;

const Divider = styled.div`
  width: 2rem;
  height: 1px;
  background-color: ${props => props.theme.text};
  ${media.desktop`
    width: 2rem;
    height: 2px;
  `};
`;

const ByWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  ${media.desktop`
    justify-content: flex-start;
    margin: 1.5rem 0;
    text-align: left;
  `};

  & span {
    font-size: 0.8rem;
    /* font-weight: bold; */
    margin: 0 0.5rem;
  }
`;

const Text = styled.a<{ display: 'mobile' | 'desktop' }>`
  ${touchableOpacity}
  display: ${props => (props.display === 'mobile' ? 'unset' : 'none')};
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  word-break: keep-all;
  ${media.desktop`
    display: ${props => (props.display === 'desktop' ? 'unset' : 'none')};
    font-size: 2.5rem;
    text-align: left;
  `};

  & span {
    font-size: 1rem;
    font-weight: normal;
    font-style: italic;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0rem;
  padding: 0.5rem;
  ${media.desktop`
    justify-content: flex-start;
    margin-bottom: 2rem;
    margin-top: 5rem;
  `};
`;

export default memo(Title);
