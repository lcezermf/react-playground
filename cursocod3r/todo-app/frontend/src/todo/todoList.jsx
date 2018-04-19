import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'done' : ''}>{todo.description}</td>
        <td>
          <IconButton hide={todo.done} style='success' icon='check'
            onClick={() => props.handleMarkAsDone(todo)} />
          <IconButton hide={!todo.done} style='warning' icon='undo'
            onClick={() => props.handleMarkAsUndone(todo)}/>
          <IconButton hide={!todo.done} style='danger' icon='trash-o'
            onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
