import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';
import { useSignUp } from './useSignUp';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const {
    register,
    formState,
    getValues,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      passwordConfirm: '',
    },
  });
  const { errors } = formState;
  const { signUp, isSigningUp } = useSignUp();

  const onSubmit = ({ email, password, fullName }) => {
    signUp(
      { email, password, fullName },
      {
        onSettled: reset,
      }
    );
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Full name"
        error={errors?.fullName?.message}
      >
        <Input
          type="text"
          id="fullName"
          {...register('fullName', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow
        label="Email address"
        error={errors?.email?.message}
      >
        <Input
          type="email"
          id="email"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message:
                'Please provide a valid email address',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message:
                'Password needs a minimum of 8 characters',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register('passwordConfirm', {
            validate: (value) =>
              value === getValues().password ||
              'Confirm password needs to match password',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        {isSigningUp ? (
          <Button disabled={isSigningUp}>
            <SpinnerMini />
          </Button>
        ) : (
          <Button type="submit">Create new user</Button>
        )}
      </FormRow>
    </Form>
  );
}

export default SignupForm;
