import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignUp() {
  const { mutate: signUp, isLoading: isSigningUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Account successfully created! Plase verify the new account from the user's email address"
      );
    },
    onError: (err) => {
      toast.error('Something went wrong', err.message);
    },
  });
  return { signUp, isSigningUp };
}
