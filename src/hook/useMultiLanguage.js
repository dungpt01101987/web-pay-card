import { useIntl } from 'react-intl';

const useMultiLanguage = () => {
    const intl = useIntl();

    const AUTH_SIGN_IN_TITLE = intl.formatMessage({
        id: 'auth.signin.title'
    });

    const FORM_EMAIL_ADDRESS_LABEL = intl.formatMessage({
        id: 'form.email.label'
    });

    const FORM_EMAIL_MESSAGE_ERROR_EMPTY = intl.formatMessage({
        id: 'form.email.errorMessage.empty'
    });

    const FORM_EMAIL_MESSAGE_PLACEHOLDER = intl.formatMessage({
        id: 'form.email.placeholder'
    });

    const FORM_PASSWORD_LABEL = intl.formatMessage({
        id: 'form.password.label'
    });

    const FORM_PASSWORD_MESSAGE_PLACEHOLDER = intl.formatMessage({
        id: 'form.password.placeholder'
    });

    const FORM_PASSWORD_MESSAGE_ERROR_EMPTY = intl.formatMessage({
        id: 'form.password.errorMessage.empty'
    });

    const FORM_SIGN_IN_BUTTON_SUBMIT = intl.formatMessage({
        id: 'form.signIn.buttonSubmit',
    });

    const FORM_SIGN_IN_MOVE_TO_SIGN_UP = intl.formatMessage({
        id: 'form.signIn.moveToSignUp',
    });

    const AUTH_FORGOT_PASSWORD_TITLE = intl.formatMessage({
        id: 'form.signin.forgotPassword'
    });


    return {
        AUTH_SIGN_IN_TITLE,
        FORM_EMAIL_ADDRESS_LABEL,
        FORM_EMAIL_MESSAGE_ERROR_EMPTY,
        FORM_EMAIL_MESSAGE_PLACEHOLDER,
        FORM_PASSWORD_LABEL,
        FORM_PASSWORD_MESSAGE_PLACEHOLDER,
        FORM_PASSWORD_MESSAGE_ERROR_EMPTY,
        FORM_SIGN_IN_BUTTON_SUBMIT,
        FORM_SIGN_IN_MOVE_TO_SIGN_UP,
        AUTH_FORGOT_PASSWORD_TITLE
    };
}

export default useMultiLanguage;