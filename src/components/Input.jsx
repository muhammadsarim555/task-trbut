import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  name,
  id,
  disabled = false,
  required = false,
  autoComplete = 'off',
  error,
  label,
  helperText,
  onClose,
  ...props
}) => {
  const baseClasses = 'w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800';
  const errorClasses = 'border-red-500 focus:ring-red-500';
  const disabledClasses = 'bg-gray-100 cursor-not-allowed';

  const inputClasses = `
    ${baseClasses}
    ${error ? errorClasses : ''}
    ${disabled ? disabledClasses : ''}
    ${className}
    ${value ? 'pr-8' : ''}
  `.trim();

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: '' } });
    }
    if (onClose) {
      onClose();  // Call onClose callback if provided
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClasses}
          name={name}
          id={id}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          {...props}
        />
        {value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear input"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input; 