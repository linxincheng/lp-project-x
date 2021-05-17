import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';

export const TestPage = () => {
  const btnEvent = useCallback(
    () => {
      console.log('look me!')
    },
    [],
  )
  return <Container>
    <div>test</div>
    <Button onClick={btnEvent}>antd的一个按钮噢</Button>
  </Container>
}

const Container = styled.div`
 height: 100vh;
`
