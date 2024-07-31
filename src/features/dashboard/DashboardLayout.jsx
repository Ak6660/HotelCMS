import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import useRecentBookings from './useRecentBookings';
import useRecentStays from './useRecentStays';
import Stats from './Stats';
import useCabins from '../cabins/useCabins';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function DashboardLayout() {
  const { recentBookings, isLoading } = useRecentBookings();
  const {
    isLoading: isLoasdingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { isLoading: isLoadingCabins, cabins } =
    useCabins();

  if (isLoading || isLoasdingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={recentBookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins?.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart
        bookings={recentBookings}
        numDays={numDays}
      />
    </StyledDashboardLayout>
  );
}
