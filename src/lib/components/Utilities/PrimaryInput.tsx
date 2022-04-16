import React, { useState } from 'react';
import {
  FieldError,
  UseFormRegister,
  RegisterOptions,
  Path,
} from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  placeholder?: string;
  label?: string;
  register: UseFormRegister<TFormValues>;
  error: FieldError | undefined;
  type?: string;
  required?: boolean;
  disableLabel?: boolean;
  validate?: any;
  icon?: boolean;
  variant?: string;
  borderColor?: string;
  borderRadius?: string;
  placeholderColor?: string;
  defaultValue: string | number | undefined;
  format?: string;
  value?: string | number | undefined;
  testId?: string;
}

export const PrimaryInput = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  type = 'text',
  label = '',
  register,
  validate = {},
  error,
  disableLabel = false,
  placeholder = '',
  variant = 'outline',
  borderColor = 'gray.300',
  borderRadius = 'md',
  placeholderColor = 'gray.300',
  defaultValue,
  format,
  value,
  testId,
}: FormInputProps<TFormValues>) => {
  const [show, setShow] = useState<boolean>(false);
  const inputStyle = error
    ? 'shadow-sm focus:ring-red-500 focus:border-red-500 focus:border-0 block w-full h-11 sm:text-sm border border-red-500 rounded pl-4'
    : 'shadow-sm focus:ring-vca-green focus:border-vca-orange-2 focus:border-0 block w-full h-11 sm:text-sm border border-gray-400 rounded pl-4';
  return type === 'password' ? (
    <div className="form-group">
      <div className="form-label-group">
        <label className="form-label" htmlFor={`${name}`}>
          {label}
        </label>
        {/* <a
          className="link link-primary link-sm"
          href="html/pages/auths/auth-reset-v2.html"
        >
          Forgot password
        </a> */}
      </div>
      <div className="form-control-wrap">
        <a
          href="#"
          className="form-icon form-icon-right passcode-switch lg"
          data-target="password"
          onClick={() => setShow(!show)}
        >
          {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </a>
        <input
          {...register(name, { required, ...validate })}
          className={
            'form-control form-control-lg ' + (error ? ' is-invalid' : '')
          }
          placeholder={`${placeholder}`}
          type={show ? 'text' : type}
          aria-describedby={`${name}`}
          defaultValue={defaultValue}
          aria-labelledby={`${name}`}
          aria-label={`${name}`}
          value={value}
          data-testid={testId}
          id="password"
        />
      </div>
    </div>
  ) : (
    <div className="form-group">
      <label htmlFor={`${name}`} className="form-label">
        {label}
      </label>
      <div className="form-control-wrap">
        <input
          {...register(name, { required, ...validate })}
          className={
            'form-control form-control-lg ' + (error ? ' is-invalid' : '')
          }
          placeholder={`${placeholder}`}
          type={type}
          aria-describedby={`${name}`}
          defaultValue={defaultValue}
          aria-labelledby={`${name}`}
          aria-label={`${name}`}
          value={value}
          data-testid={testId}
        />
      </div>

      <p className="small text-danger">
        <em>
          {(error?.type === 'required' && `${label} is required`) ||
            error?.message}
        </em>
      </p>
    </div>
  );
};
