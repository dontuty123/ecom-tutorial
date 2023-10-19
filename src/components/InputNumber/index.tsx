import React, { InputHTMLAttributes } from "react";

interface IInputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  inputNumber: number;
  limit: number;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setInputNumber: (value: React.SetStateAction<number>) => void;
}

export default function InputNumber({
  inputNumber,
  limit,
  value,
  handleInput,
  setInputNumber,
}: IInputNumberProps) {
  //loại bỏ kí tự khác số
  const restrictToNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <div className="flex">
      <button
        className="bg-white border px-[6px] py-[1px]"
        onClick={() =>
          setInputNumber(inputNumber > 0 ? inputNumber - 1 : inputNumber)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-3 h-6 text-black"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <input
        role="input_number"
        type="text"
        className="border border-l-0 border-r-0 text-center w-[40%] focus:border-transparent"
        placeholder="1"
        onInput={(event) =>
          restrictToNumbers(event as React.ChangeEvent<HTMLInputElement>)
        }
        value={value ? value : inputNumber}
        onChange={handleInput}
      />
      <button
        className="bg-white border px-[6px] py-[1px]"
        onClick={() =>
          setInputNumber(inputNumber < limit ? inputNumber + 1 : inputNumber)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-3 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
