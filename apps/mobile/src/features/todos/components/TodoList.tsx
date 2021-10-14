import { Todo } from '@smartlists/shared-types';
import React, { useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import { useTodos } from '../hooks/useTodos';
import styled from 'styled-components/native';

export const TodoList = () => {
  const { todos, toggleTodo } = useTodos();

  const renderItem = useCallback(
    ({ item: todo }: { item: Todo }) => (
      <TouchableOpacity onPress={() => toggleTodo(todo.id, todo.done)}>
        <Text>{todo.done ? '✅' : '⭕️'}</Text>
        <Text> </Text>
        <Text>{todo.text}</Text>
      </TouchableOpacity>
    ),
    [toggleTodo]
  );

  return <FlatList data={todos} renderItem={renderItem} />;
};

const TouchableOpacity = styled.TouchableOpacity({
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 24,
  paddingVertical: 12,
});
