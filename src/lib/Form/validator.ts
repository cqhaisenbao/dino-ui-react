import { FormValue } from "./index";

interface FormRule {
    key: string,
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: any) => boolean;
}

export type FormRules = Array<FormRule>;

interface FormError {
    key: string,
    message: string
}

export type FormErrors = Array<FormError>;

const validator = (formData: FormValue, rules: FormRules): Promise<FormErrors> => {
    const errors: FormErrors = [];
    rules.forEach(rule => {
        const value = formData[rule.key];
        if (rule.required && !value) {
            errors.push({
                key: rule.key,
                message: `${rule.key} is required`
            });
        }
        if (rule.minLength && value && value.length < rule.minLength) {
            errors.push({
                key: rule.key,
                message: `${rule.key} must be at least ${rule.minLength} characters`
            });
        }
        if (rule.maxLength && value && value.length > rule.maxLength) {
            errors.push({
                key: rule.key,
                message: `${rule.key} must be at most ${rule.maxLength} characters`
            });
        }
        if (rule.pattern && value && !rule.pattern.test(value)) {
            errors.push({
                key: rule.key,
                message: `${rule.key} must match pattern ${rule.pattern}`
            });
        }
        if (rule.validate && !rule.validate(value)) {
            errors.push({
                key: rule.key,
                message: `${rule.key} is invalid`
            });
        }
    });
    return Promise.resolve(errors);
}

export default validator;