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
  values: {
    [key: string]: string;
  };
  /**
   * @description 表单按钮
   */
  buttons: React.ReactNode;
}

const Form: React.FC<FormProps> = (props) => {
  const { fields, buttons } = props;
  return (
    <form>
      {fields.map((field) => {
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <input type={field.type} />
          </div>
        );
      })}
      {buttons}
    </form>
  );
};
export default Form;
