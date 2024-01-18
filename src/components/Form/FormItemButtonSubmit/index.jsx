import React, { useMemo } from 'react';
import { Button } from 'antd';
import { FormItemStyled, TextAlignCenter } from 'components/Form/styled';
import LoadingSpin from 'components/LoadingSpin';
import Link from 'components/Link';
import useMultiLanguage from "hook/useMultiLanguage";
import { SIGN_UP_PATH } from 'constant/authPath';

const FormItemButtonSubmit = ({ loading, formName }) => {
    const {
        FORM_SIGN_IN_BUTTON_SUBMIT,
        FORM_SIGN_IN_MOVE_TO_SIGN_UP
    } = useMultiLanguage();
    const checkFormName = useMemo(() => {
        switch (formName) {
            case 'sign-in':
                return {
                    buttonText: FORM_SIGN_IN_BUTTON_SUBMIT,
                    linkText: FORM_SIGN_IN_MOVE_TO_SIGN_UP,
                    path: `/${SIGN_UP_PATH}`,
                }
            default:
                return null;
        }
    }, [
        formName,
        FORM_SIGN_IN_BUTTON_SUBMIT,
        FORM_SIGN_IN_MOVE_TO_SIGN_UP
    ]);
    return (
        <FormItemStyled>
            <Button
                type="primary"
                block
                size={'large'}
                htmlType="submit"
                disabled={loading}
            >
                {loading ? <LoadingSpin /> : checkFormName.buttonText}
            </Button>
            <TextAlignCenter>
                <Link to={checkFormName.path} text={checkFormName.linkText} size={"12px"} />
            </TextAlignCenter>
        </FormItemStyled>
    );
}

export default FormItemButtonSubmit;