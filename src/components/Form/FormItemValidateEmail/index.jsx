import React from "react";
import { FormItemStyled, InputStyled } from "components/Form/styled"
import LabelForm from "components/Form/LabelForm";
import FormMessage from "components/Form/FormMessage";
import useMultiLanguage from "hook/useMultiLanguage";
import { CHECK_EMAIL } from "constant/regex";
import Icon from "components/Icon";
import { MailOutlined } from "@ant-design/icons";
import { MAX_LENGTH_EMAIL } from 'constant/inputMaxlength';

const FormItemValidateEmail = ({ maxLength, onChange, name }) => {
    const {
        FORM_EMAIL_ADDRESS_LABEL,
        FORM_EMAIL_MESSAGE_ERROR_EMPTY,
        FORM_EMAIL_MESSAGE_PLACEHOLDER
    } = useMultiLanguage();
    return (
        <FormItemStyled
            name={name}
            label={<LabelForm text={FORM_EMAIL_ADDRESS_LABEL} />}
            rules={[
                {
                    require: true,
                    message: (<FormMessage
                        text={FORM_EMAIL_MESSAGE_ERROR_EMPTY}
                        marginBottom={'12px'}
                    />),
                },
                {
                    pattern: CHECK_EMAIL,

                }
            ]}
        >
            <InputStyled
                prefix={
                    <Icon>
                        <MailOutlined />
                    </Icon>
                }
                placeholder={FORM_EMAIL_MESSAGE_PLACEHOLDER}
                size="large"
                maxLength={maxLength ? maxLength : MAX_LENGTH_EMAIL}
                onChange={onChange}
            />
        </FormItemStyled>
    )
}

export default FormItemValidateEmail;