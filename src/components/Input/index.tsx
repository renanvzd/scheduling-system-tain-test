import { useEffect, useRef, ReactNode } from 'react';
import { useField } from '@unform/core';

import { ContainerInput, ContainerSelect } from './styles';

interface InputProps {
  name: string;
  placeholder?: string;
  input?: boolean;
  select?: boolean;
  children?: ReactNode;
}

export function Input({ name, input, select, children, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    if (fieldName && inputRef.current) {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    }
  }, [fieldName, registerField]);

  useEffect(() => {
    if (select && selectRef.current) {
      registerField({
        name,
        ref: selectRef.current,
        path: 'value',
      });
    }
  }, [select, name, registerField]);

  return (
    <>
      {input && (
        <ContainerInput>
          <input
            defaultValue={defaultValue}
            ref={inputRef}
            {...rest}
            maxLength={15}
          />
        </ContainerInput>
      )}
      {select && (
        <ContainerSelect>
          <select defaultValue={defaultValue} ref={selectRef} {...rest}>
            {children}
          </select>
        </ContainerSelect>
      )}
    </>
  );
}
