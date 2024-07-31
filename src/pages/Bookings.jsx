import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import MobileContainer from './MobileContainer';

// const CounterHOC = withFunctionality(Counter);

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <MobileContainer>
          <Heading as="h1">All bookings</Heading>
        </MobileContainer>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;

// function Counter({ count = 0, increment, decrement }) {
//   return (
//     <div>
//       <button onClick={increment}>+</button>
//       <p>{count}</p>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

// function withFunctionality(Comp) {
//   return function WithFunctionality() {
//     const [count, setCount] = useState(0);
//     const handleIncrease = () => setCount(count + 1);
//     const handleDecrease = () => setCount(count - 1);
//     return (
//       <Comp
//         count={count}
//         increment={handleIncrease}
//         decrement={handleDecrease}
//       />
//     );
//   };
// }
