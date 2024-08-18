/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
  className?: string;
  lable?: string;
  value?:string|number|undefined
  id?: string;
  children?: React.ReactNode;
  required?:boolean,
  checked?:boolean
};
import style from "./Input.module.css";
const Input: React.FC<InputProps> = ({
  onChange,
  type,
  value,
  placeholder,
  className,
  lable,
  children,
  required,
  checked
}) => {
  return (
  
      <input type={type} placeholder={placeholder} className={`${style.input} ${className}`} required={required}  onChange={onChange} value={value} checked={checked}/>
  );
};

export default Input;
