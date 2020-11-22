import React, { useCallback, useEffect, useRef, useState } from 'react';
import Cam, { WebcamProps } from 'react-webcam';
import { Button } from '../../components';

// import { Container } from './styles';

const CamComponent: React.FC = () => {
  const camRef = useRef<Cam>(null);
  const [preview, setPreview] = useState<any>('');

  const capture = useCallback(() => {
    const image = camRef.current?.getScreenshot();

    setPreview(image);
  }, []);

  return (
    <>
      <Cam
        ref={camRef}
        audio={false}
        videoConstraints={{
          aspectRatio: 9 / 16,
        }}
        screenshotFormat="image/webp"
      />
      <Button onClick={capture}>Captura</Button>

      {!!preview && <img src={preview} alt="" />}
    </>
  );
};

export default CamComponent;
