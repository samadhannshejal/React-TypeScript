import React from "react";
import style from './DropDown.module.css'
type DropDownProps = {
  onClick: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  values: string[];
  lable: string;
  id: string;
};
const DropDown: React.FC<DropDownProps> = ({ onClick, values, lable, id }) => {
  return (
    <div>
      <label htmlFor={id} className={style.label}>{lable}</label>
      <select name={id} id={id} onChange={onClick} className={style.select}>
        {values.map((option: string) => (
          <option value={option} key={option} >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
