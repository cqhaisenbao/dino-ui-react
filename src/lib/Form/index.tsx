import React from 'react';

interface FormProps {
  /**
   * @description 表单提交事件
   */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  /**
   * @description 表单配置项
   */
  fields: {
    name: string;
    label: string;
    type: string;
  }[];
  /**
   * @description 表单值
   */
  value: {
    [key: string]: string;
  };
  /**
   * @description 表单按钮
   */
  buttons: React.ReactNode;
  /**
   * @description 表单变化时的回调
   */
  onChange: (value: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const { fields, buttons, value: formValue, onChange } = props;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => (name: string) => {
    const { value } = e.target;
    onChange({
      ...formValue,
      [name]: value,
    });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  return (
    <form onSubmit={submit}>
      {fields.map(({ name, label, type }) => {
        return (
          <div key={name}>
            <label>{label}</label>
            <input onChange={(e) => onInputChange(e)(name)} type={type} value={formValue[name]} />
          </div>
        );
      })}
      <div>{buttons}</div>
    </form>
  );
};
export default Form;
