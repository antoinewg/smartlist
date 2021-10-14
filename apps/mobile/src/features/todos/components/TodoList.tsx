import { Todo } from '@smartlists/shared-types';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { useTodos } from '../hooks/useTodos';
import { Check } from '../../../assets/icons/CheckIcon';
import { UnChecked } from '../../../assets/icons/UnCheckedIcon';
import { Close } from '../../../assets/icons/CloseIcon';
import { Colors } from '../../../libs/ui/theme';

export const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  const renderItem = useCallback(
    ({ item: todo }: { item: Todo }) => (
      <Row>
        <ToggleTouchableOpacity
          flex={8}
          onPress={() => toggleTodo(todo.id, todo.done)}
        >
          {todo.done ? (
            <Check size={24} color={Colors.primary} />
          ) : (
            <UnChecked size={24} color={Colors.foreground} />
          )}
          <Text>{todo.text}</Text>
        </ToggleTouchableOpacity>
        <DeleteTouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <Close size={24} color={Colors.secondary} />
        </DeleteTouchableOpacity>
      </Row>
    ),
    [toggleTodo, deleteTodo]
  );

  return <FlatList data={todos} renderItem={renderItem} />;
};

const Row = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 24,
  paddingVertical: 12,
});

const ToggleTouchableOpacity = styled.TouchableOpacity({
  flex: 8,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

const DeleteTouchableOpacity = styled.TouchableOpacity({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const Text = styled.Text({ paddingLeft: 12 });
