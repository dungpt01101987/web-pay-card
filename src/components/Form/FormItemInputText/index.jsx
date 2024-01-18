import React from "react";
import { FormItemStyled, InputStyled } from "components/Form/styled";
import LabelForm from "components/Form/LabelForm";
import FormMessage from "components/Form/FormMessage";

const FormItemInputText = ({ maxLength, onChange, name, labelText, require, messageErrorEmpty }) => {
    return (
        <FormItemStyled
            name={name}
            label={<LabelForm text={labelText} />}
            rules={[
                {
                    require: { require },
                    message: (<FormMessage
                        text={messageErrorEmpty}
                        marginBottom={'12px'}
                    />),
                }
            ]}
        >
            <InputStyled
                size="large"
                maxLength={maxLength}
                onChange={onChange}
            />
        </FormItemStyled>
    );
}

export default FormItemInputText;