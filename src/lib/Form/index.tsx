import React from 'react';
import classNames from 'classnames';
import validator, { FormErrors, FormRules } from './validator';

export interface FormValue {
  [key: string]: string;
}

interface FormProps {
  /**
   * @description 表单提交事件
   */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<FormErrors>;
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
  value: FormValue;
  /**
   * @description 表单验证规则
    */
  rules?: FormRules;
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
  const { fields, buttons, value: formValue, onChange, rules } = props;
  const [errors, setErrors] = React.useState<FormErrors>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => (name: string) => {
    const { value } = e.target;
    onChange({
      ...formValue,
      [name]: value,
    });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<FormErrors> => {
    e.preventDefault();
    const errors = await validator(formValue, rules || []);
    if (errors.length) {
      console.log(errors);
      setErrors(errors);
      return Promise.reject(errors);
    } else {
      props.onSubmit(e);
      return Promise.resolve([]);
    }
  };

  const getLabelClassName = (name: string) => {
    return classNames('yif-form-label', {
      'required': rules && rules.length && rules.find((rule) => rule.key === name)?.required
    });
  };

  return (
    <form className='yif-from' onSubmit={submit}>
      {fields.map(({ name, label, type }) => {
        return (
          <div key={name} className='yif-form-item'>
            <label className={getLabelClassName(name)}>{label}：</label>
            <div>
              <input onChange={(e) => onInputChange(e)(name)} type={type} value={formValue[name]} />
              <p style={{ color: 'red', fontSize: '12px' }}>
                {errors.find(({ key }) => key === name)?.message}
              </p>
            </div>
          </div>
        );
      })}
      <div>{buttons}</div>
    </form>
  );
};
export default Form;
