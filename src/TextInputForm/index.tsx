import React, {FC, FormEvent, useState} from 'react';

type Props = {
  getTask: (value: string) => void;
}
const TextInputForm: FC<Props> = ({getTask}) => {
  const [value, getValue] = useState("")
  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    getTask(value)
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        onChange={(e) => getValue(e.target.value)}
        type="text"
      />
      <input type="submit"/>
    </form>
  );
};

export default TextInputForm;