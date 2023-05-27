import { useState } from 'react';
import { Container, Button, styled } from '@mui/material';

const WModJs = styled('div')({
  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  '&[data-w-id]': {
    willChange: 'transform, opacity',
    '&:not(.w-mod-ix)': {
      transform: 'translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
      opacity: 0,
    },
  },
});

const IndexPage = () => {
  const [transformed, setTransformed] = useState(false);

  const handleTransform = () => {
    setTransformed(true);
  };

  return (
    <Container maxWidth="md">
      <WModJs
        className={`${!transformed ? 'not(.w-mod-ix)' : ''}`}
        data-w-id="2baee863-d73d-21e3-10f5-56f2c3e1dc48"
        style={{
          transform: !transformed ? 'translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' : '',
        }}
      >
        Content 1
      </WModJs>
      <WModJs
        className={`${!transformed ? 'not(.w-mod-ix)' : ''}`}
        data-w-id="85f88a3f-18a1-5a46-ca9c-9fad186326d8"
        style={{
          opacity: !transformed ? 0 : '',
        }}
      >
        Content 2
      </WModJs>
      <WModJs
        className={`${!transformed ? 'not(.w-mod-ix)' : ''}`}
        data-w-id="16ce27ae-cbaa-6fcf-83d4-3ffb91b2202b"
        style={{
          transform: !transformed ? 'translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' : '',
        }}
      >
        Content 3
      </WModJs>
      <WModJs
        className={`${!transformed ? 'not(.w-mod-ix)' : ''}`}
        data-w-id="3d64238e-692e-0ee5-a596-4635b1603e78"
        style={{
          transform: !transformed ? 'translate3d(0, 300px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' : '',
          opacity: !transformed ? 0 : '',
        }}
      >
        Content 4
      </WModJs>
      <Button variant="contained" onClick={handleTransform}>
        Transform
      </Button>
    </Container>
  );
};

export default IndexPage;
