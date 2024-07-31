import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../services/apiBookings';

export function useTodayActivity() {
  const {
    isLoading: isLoadingTodayActivity,
    data: todaysActivity,
    error,
  } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ['todayActivity'],
  });

  if (error) throw new Error(error.message);
  return { isLoadingTodayActivity, todaysActivity };
}
