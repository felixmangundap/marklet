
type Props = {
  className?: string;
  disabled?: boolean;
  label: string;
  onClick: () => void;
}

const Button = (props: Props) => {
  const {
    className,
    disabled = false,
    label,
    onClick
  } = props;

  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`
        ${disabled ? 'cursor-default opacity-50' : 'cursor-pointer'}
        text-zinc-50 dark:text-zinc-700 bg-zinc-900 dark:bg-zinc-50
        p-3 rounded-md leading-none text-center font-bold 
        ${className}
      `}
    >
      {label}
    </div>
  )
};

export default Button;