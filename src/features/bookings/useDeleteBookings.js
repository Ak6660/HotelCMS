import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export default function useDeleteBookings() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } =
    useMutation({
      mutationFn: deleteBookingApi,
      onSuccess: () => {
        toast.success('Booking successfully deleted');
        queryClient.invalidateQueries({ active: true });
      },
      onError: (err) => {
        toast.error('Booking could be deleted');
        console.log(err.message);
      },
    });
  return { deleteBooking, isDeleting };
}
