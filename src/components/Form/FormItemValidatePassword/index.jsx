import React from 'react';
import Icon from 'components/Icon';
import LabelForm from 'components/Form/LabelForm';
import useMultiLanguage from 'hook/useMultiLanguage';
import FormMessage from 'components/Form/FormMessage';
import { Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { FormItemStyled } from 'components/Form/styled';
import { MAX_LENGTH_PASSWORD } from 'constant/inputMaxlength';

const FormItemValidatePassword = ({ onChange, maxLength, name }) => {
    const {
        FORM_PASSWORD_LABEL,
        FORM_PASSWORD_MESSAGE_PLACEHOLDER,
        FORM_PASSWORD_MESSAGE_ERROR_EMPTY,
    } = useMultiLanguage();

    return (
        <FormItemStyled
            marginbottom="15px"
            name={name}
            label={<LabelForm text={FORM_PASSWORD_LABEL} />}
            rules={[
                {
                    required: true,
                    message: (
                        <FormMessage
                            text1={FORM_PASSWORD_MESSAGE_ERROR_EMPTY}
                            marginBottom={'12px'}
                        />
                    ),
                },
            ]}
        >
            <Input.Password
                prefix={
                    <Icon>
                        <LockOutlined />
                    </Icon>
                }
                autoComplete="on"
                size="large"
                type="password"
                placeholder={FORM_PASSWORD_MESSAGE_PLACEHOLDER}
                onChange={onChange}
                maxLength={maxLength ? maxLength : MAX_LENGTH_PASSWORD}
            />
        </FormItemStyled>
    );
};

export default FormItemValidatePassword;
