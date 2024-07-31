import styled from 'styled-components';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import { useTodayActivity } from './useTodayActivity';
import Spinner from '../../ui/Spinner';
import TodayItem from './TodayItem';

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

const TodayHeader = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  justify-items: center;
  font-weight: 500;
  color: var(--color-brand-100);

  font-size: 1.6 rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

function TodayActivity() {
  const { isLoadingTodayActivity, todaysActivity } =
    useTodayActivity();

  console.log(todaysActivity);
  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>
      {!isLoadingTodayActivity ? (
        todaysActivity?.length > 0 ? (
          <TodayList>
            <TodayHeader>
              <div>Status</div>
              <div>Name</div>
              <div>Stays</div>
              <div>Options</div>
            </TodayHeader>
            {todaysActivity.map((activity) => (
              <TodayItem
                key={activity.id}
                activity={activity}
              />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today....</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
