// Todos안에 사용될 TodoItem
const TodoItem = ({ todo, onToggle, onRemove }) => {
  // 안에서 실행될 내용
  // todo(할일 목록), onToggle(체크박스), onRemove(삭제)
  return (
    <div>
      <input
        type="checkbox"
        // 클릭했을 때 실행하기 위해 익명함수로 감싼다
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button
        onClick={() => {
          onRemove(todo.id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

// 내보낼 Todos
const Todos = ({
  input, // input에 입력되는 텍스트
  todos, // 할일 목록이 들어가 있는 객체
  onChangeInput, // input안의 값을 가져오는 메서드
  onInsert, // 가져온 값을 todo목록에 추가
  onToggle, // todoItem에 전달해 줄 값
  onRemove,
}) => {
  const onChange = (e) => {
    onChangeInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default Todos;
