import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import MobileContainer from './MobileContainer';

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <MobileContainer>
          <Heading as="h1">Dashboard</Heading>
        </MobileContainer>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
