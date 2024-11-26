import { cn } from '@/lib/utils'
import React, { useId } from 'react'
import styles from './styles.module.css'

interface InputProps {
  label: string
  type?: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  helperText?: string
  placeholder?: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  helperText = '',
  placeholder = '',
  className
}) => {
  const id = useId()
  return (
    <div className={cn([styles.wrapper, className])}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
      {helperText && <p className={styles.helper}>{helperText}</p>}
    </div>
  )
}

export default Input
