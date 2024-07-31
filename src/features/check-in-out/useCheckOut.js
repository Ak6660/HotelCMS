import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export default function useCheckOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkOut, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) => {
      updateBooking(bookingId, {
        status: 'checked-out',
      });
    },
    onSuccess: () => {
      toast.success(`Booking successfully checked out`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },
    onError: (err) => {
      toast.error('There was an error while checking out');
      console.log(err.message);
    },
  });

  return { checkOut, isCheckingOut };
}
