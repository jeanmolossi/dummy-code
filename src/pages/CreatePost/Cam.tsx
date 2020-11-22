import React, { useCallback, useRef, useState } from 'react';
import Cam from 'react-webcam';
import { Button } from '../../components';

// import { Container } from './styles';

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
    setFacingMode(prevState => (prevState ? undefined : { exact: 'user' }));
  }, []);

  return (
    <>
      <Cam
        ref={camRef}
        audio={false}
        videoConstraints={{
          aspectRatio: 9 / 16,
          facingMode,
        }}
        screenshotFormat="image/webp"
      />
      <Button onClick={capture}>Captura</Button>
      <Button onClick={switchCamera}>Trocar camera</Button>

      {!!preview && <img src={preview} alt="" />}
    </>
  );
};

export default CamComponent;
