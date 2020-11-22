import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { IconType } from 'react-icons';
import { Container, BioGraph } from './styles';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  icon?: IconType;
}

const TextArea = ({ name, ...rest }: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { defaultValue, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <BioGraph ref={textAreaRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default TextArea;
