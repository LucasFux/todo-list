import React from 'react';
import { TodoIcon } from './index';

function DeleteIcon({ deleteTodo }) {
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={deleteTodo}
    />
  );
}

export { DeleteIcon };