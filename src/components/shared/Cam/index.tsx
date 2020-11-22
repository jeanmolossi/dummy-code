import React, { useCallback, useRef, useState } from 'react';
import { FiCamera, FiRepeat } from 'react-icons/fi';
import Cam from 'react-webcam';
import { Button } from '../../index';
import { Container, ButtonsContainer } from './styles';

const CamComponent: React.FC = () => {
  const camRef = useRef<Cam>(null);
  const [preview, setPreview] = useState<any>('');
  const [facingMode, setFacingMode] = useState<
    { exact: 'user' | 'environment' } | undefined
  >(undefined);

  const capture = useCallback(() => {
    const image = camRef.current?.getScreenshot();

    setPreview(image);
  }, []);

  const switchCamera = useCallback(() => {
    setFacingMode(prevState =>
      prevState ? undefined : { exact: 'environment' },
    );
  }, []);

  return (
    <Container>
      <Cam
        ref={camRef}
        audio={false}
        videoConstraints={{
          aspectRatio: 9 / 16,
          facingMode,
        }}
        screenshotFormat="image/webp"
        width="100%"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          transform: `rotateY(180deg)`,
        }}
      />

      <ButtonsContainer>
        <Button onClick={switchCamera}>
          <FiRepeat />
        </Button>
        <Button onClick={capture}>
          <FiCamera />
        </Button>
      </ButtonsContainer>

      {!!preview && <img src={preview} alt="" />}
    </Container>
  );
};

export default CamComponent;
