import React, { memo } from 'react';
import styled, { css } from '../../styles/styled-components';
import media from '../../styles/media';

interface Props {}

function Description(props: Props) {
  return (
    <Wrapper>
      <span>
        Slackline web tools is offline web application to provide
        frequently needed resources and tools for slackliners all bundled together.
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  ${media.desktop`
    display: flex;
  `};
  & span {
    font-size: 1em;
    margin: 2em 0em;
    /* font-weight: bolder; */
    font-style: italic;
    line-height: 1.5em;
    text-align: left;
  }
`;

export default memo(Description);
