import { api } from '@mono/shared';
import { useQuery } from 'react-query';

export const ApiRequestExample = () => {
  const { isLoading, error, data } = useQuery('fetchLuke', () =>
    api().get('http://swapi.dev/api/people/1/')
  );

  return (
    <div style={{ padding: 24, minHeight: 360 }}>
      <h1>스타워즈 API와 함께하는 React Query 예제</h1>
      {error && <div>뭔가 잘못됐군요 ...</div>}
      {isLoading ? (
        <div>루크 스카이워커의 데이터를 불러옵니다 ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};
