import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';
import useCabins from './useCabins';

export default function CabinTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, cabins, error } = useCabins();

  if (isLoading) return <Spinner />;

  if (error) {
    console.log(error);
    throw new Error('There is an Error');
  }

  if (!searchParams.get('discount')) {
    searchParams.set('discount', 'all');
    setSearchParams(searchParams);
  }

  const filterValue = searchParams.get('discount');
  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter(
      (cabin) => cabin.discount === 0
    );
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter(
      (cabin) => cabin.discount
    );

  const sortBy = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabin = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (!cabins.length) return <Empty resource="cabins" />;

  return (
    <Table columns="0.6fr 1fr 2fr 1fr 1fr 0.5fr">
      <Table.Header role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={sortedCabin}
        render={(cabin) => (
          <CabinRow key={cabin.id} cabin={cabin} />
        )}
      />
      <Table.Footer>
        <p>List Of the all the cabins</p>
      </Table.Footer>
    </Table>
  );
}

// #8c52ff
