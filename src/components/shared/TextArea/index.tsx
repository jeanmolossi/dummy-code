/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { IconType } from 'react-icons';
import { Container, BioGraph } from './styles';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  icon?: IconType;
}

const TextArea = ({ name, label, ...rest }: TextAreaProps) => {
  const id = (1 + Math.random() * 0x10000).toString(16).substr(1);

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
      <label htmlFor={id}>{label}:</label>

      <BioGraph
        ref={textAreaRef}
        defaultValue={defaultValue}
        rows={5}
        id={id}
        {...rest}
      />
    </Container>
  );
};

export default TextArea;
