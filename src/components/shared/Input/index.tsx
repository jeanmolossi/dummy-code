import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { IconType } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Container, IconBox, ToggleButton } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

const Input = ({ name, icon: Icon, type = 'text', ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { defaultValue, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      {Icon && (
        <IconBox>
          <Icon size={24} color="#fff" />
        </IconBox>
      )}

      <input
        ref={inputRef}
        defaultValue={defaultValue}
        type={isPasswordVisible ? 'text' : type}
        {...rest}
      />

      {type === 'password' && (
        <ToggleButton
          onClick={() => setIsPasswordVisible(oldState => !oldState)}
        >
          {isPasswordVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </ToggleButton>
      )}
    </Container>
  );
};

export default Input;
