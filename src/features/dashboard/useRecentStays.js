import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getStaysAfterDate } from '../../services/apiBookings';

export default function useRecentStays() {
  const [seachParams] = useSearchParams();

  const numDays = !seachParams.get('last')
    ? 7
    : Number(seachParams.get('last'));

  const queryDate = subDays(
    new Date(),
    numDays
  ).toISOString();

  const { isLoading, data: recentStays } = useQuery({
    queryKey: ['stays', `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  const confirmedStays = recentStays?.filter(
    (stay) =>
      stay.status === 'checked-in' ||
      stay.status === 'checked-out'
  );

  return {
    isLoading,
    recentStays,
    confirmedStays,
    numDays,
  };
}
