import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './TodoStore';

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>총 일정 항목: {totalNum}</li>
      <li>완료된 일정 항목: {totalCompletedNum}</li>
      <li>완료되지 않은 항목: {totalUncompletedNum}</li>
      <li>이행률: {formattedPercentCompleted} %</li>
    </ul>
  );
}

export default TodoListStats;
