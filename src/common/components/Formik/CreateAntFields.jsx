import React from 'react';

import { Input, Select, DatePicker, TimePicker, Form, Space } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;
const { Option } = Select;

const CreateAntField = AntComponent => ({
    field,
    form,
    hasFeedback,
    label,
    selectOptions,
    submitCount,
    type,
    ...props
}) => {
    const touched = form.touched[field.name];
    const submitted = submitCount > 0;
    const hasError = form.errors[field.name];
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;

    const onInputChanged = ({ target: { value } }) => {
        form.setFieldValue(field.name, value);
    }
    const onChange = value => form.setFieldValue(field.name, value);
    const onBlur = value => form.setFieldTouched(field.name, true);

    return (
        <div className='field-container'>
            <FormItem
                label={label}
                hasFeedback={
                    (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
                }
                help={submittedError || touchedError ? true : false}
                validateStatus={submittedError || touchedError ? 'error' : 'success'}
                style={{ display: 'flex' }}
            >
                <Space justify="start" style={{ dispaly: 'flex', width: '100%' }}>
                    <AntComponent
                        {...field}
                        {...props}
                        onBlur={onBlur}
                        onChange={type ? onInputChanged : onChange}

                    >
                        {selectOptions && selectOptions.map(name => <Option key={name}>{name}</Option>)
                        }

                    </AntComponent>
                </Space>
            </FormItem>
        </div>
    )
}

export const AntFormikSelect = CreateAntField(Select)
export const AntFormikInput = CreateAntField(Input)
export const AntFormikDatePicker = CreateAntField(DatePicker)
export const AntFormikTextArea = CreateAntField(TextArea)
export const AntFormikTimePicker = CreateAntField(TimePicker)  