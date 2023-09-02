"use client";
type InputProps = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  labelClass?: string;
  defaultValue?: string;
  value?: string;
  prefix?: string;
  onChange?: any;
  error?: string | null;
  step?: string;
  required?: boolean;
  rows?: number;
  selectOptions?: { value: string; label: string }[];
  handleSelectChange?: (e: any) => void;
  selectSelected?: { value: string; label: string };
  autoComplete?: "on" | "off";
};

export default function Input(props: InputProps) {
  


  return (
    <label
      htmlFor={props.name}
      className={`smalltext flex w-full min-w-0 flex-col gap-1 font-normal ${props.labelClass}`}
    >
      {props.label}
      {props.type !== "textarea" && props.type !== "select" ? (
        <input
          defaultValue={props.defaultValue}
          type={props.type}
          step={props.step}
          name={props.name}
          value={props.value}
          prefix={props.prefix}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={`${props.className} smalltext min-w-0 rounded-2xl px-4 py-2 `}
          style={{ borderWidth: "1px" }}
          required={props.required}
          autoComplete={props.autoComplete || "off"}
        />
      ) : props.type === "select" ? (
        <select
          className="smalltext min-w-max max-w-max rounded-2xl bg-white px-4 py-2 "
          name="status"
          onChange={props.handleSelectChange}
          defaultValue={1}
          style={{ borderWidth: "1px" }}
          value={props.selectSelected?.value}
          placeholder="Selecciona una opción"
        >
          {props?.selectOptions?.map((option) => (
            <option value={option?.value} key={option?.value}>
              {option?.label}{" "}
            </option>
          ))}
        </select>
      ) : (
        <textarea
          defaultValue={props.defaultValue}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={`${props.className} smalltext min-w-0 rounded-2xl px-4 py-2 `}
          style={{ borderWidth: "1px" }}
          required={props.required}
          rows={props.rows}
        />
      )}
      {props.error && (
        <p className="gap-estilo4 smalltext ml-2 flex font-medium text-red-700 dark:text-red-800">
          {props.error}
        </p>
      )}
    </label>
  );
}
