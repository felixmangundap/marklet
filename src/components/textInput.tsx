

type Props = {
  autoComplete?: string;
  htmlFor: string;
  isRequired?: boolean;
  label: string;
  onInput: (e: any) => void;
  placeholder?: string;
  value: string;
}

const TextInput = (props: Props) => {
  const {
    autoComplete,
    htmlFor,
    isRequired = true,
    label,
    value,
    placeholder,
    onInput,
  } = props;


  return (
    <div className='flex flex-col mb-4'>
      <label htmlFor={htmlFor} className='mb-1 text-zinc-700 dark:text-zinc-50 font-bold'>
        {label}
        {isRequired ? <span className='ml-1 text-red-700 font-bold'>*</span> : null}
      </label>
      <input className='
        text-zinc-700 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-900
        p-2 border-1 border-zinc-300 rounded-md rounded-full
        font-normal leading-none
      '
        value={value}
        placeholder={placeholder}
        type={htmlFor}
        autoComplete={autoComplete}
        onInput={onInput}
      />
    </div>
  )
}

export default TextInput;