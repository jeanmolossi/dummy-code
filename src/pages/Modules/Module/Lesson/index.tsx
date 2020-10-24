import React from 'react';
import { FaArrowLeft, FaArrowRight, FaHeart } from 'react-icons/fa';
import { FiEye, FiMessageCircle } from 'react-icons/fi';
import { Button, MainLayout } from '../../../../components';
import Comments from './Comments';
import MakeComment from './MakeComment';
import { Container, VideoContainer, LessonControls, Activity } from './styles';

const Lesson: React.FC = () => {
  return (
    <MainLayout>
      <VideoContainer>
        <video controls src="http://localhost:3000/files/frag_bunny.mp4" />
      </VideoContainer>

      <Container>
        <LessonControls>
          <Button variant="yellow">
            <FaArrowLeft />
          </Button>

          <Activity>
            <span>
              <FiEye /> 297
            </span>
            <span>
              <FiMessageCircle /> 48
            </span>
          </Activity>

          <Button variant="yellow">
            <FaHeart />
          </Button>

          <Button variant="yellow">
            <FaArrowRight />
          </Button>
        </LessonControls>

        <MakeComment lessonId="1" />

        <Comments />
      </Container>
    </MainLayout>
  );
};

export default Lesson;
