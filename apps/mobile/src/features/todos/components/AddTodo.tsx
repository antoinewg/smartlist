import React, { useCallback, useState } from 'react';
import { Button, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { useTodos } from '../hooks/useTodos';

export const AddTodo = () => {
  const [text, setText] = useState<string>('');
  const { addTodo } = useTodos();

  const handleAddTodo = useCallback(async () => {
    if (!text.length) return;
    await addTodo(text);
    setText('');
  }, [addTodo, text]);

  return (
    <Container>
      <InputContainer>
        <TextInput value={text} onChangeText={setText} />
      </InputContainer>
      <Button onPress={handleAddTodo} title="Add Todo" />
    </Container>
  );
};

const Container = styled.View({ margin: 24 });

const InputContainer = styled.View({
  border: 'solid 1px silver',
  padding: 12,
  marginBottom: 16,
});
