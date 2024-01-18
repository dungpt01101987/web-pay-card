import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
    FormContainer,
    TitleAuthentication,
    FormItemStyled
} from 'page/Auth/styled';
import useMultiLanguage from 'hook/useMultiLanguage';
import { Form } from 'antd';
import {
    FormItemValidateEmail,
    FormItemValidatePassword,
    FormItemButtonSubmit,
    FormItemInputText
} from 'components/Form';
import Link from 'components/Link';
import { login, loginVerifyOtp } from 'api/auth/authen.api';
import {
    authenticationToken
} from 'recoil/atom/auth';


function SignIn() {
    const navigate = useNavigate();
    const {
        AUTH_SIGN_IN_TITLE,
        AUTH_FORGOT_PASSWORD_TITLE
    } = useMultiLanguage();
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [, setToken] = useRecoilState(authenticationToken);

    const [otp, setOtp] = useState(false);

    const [form] = Form.useForm();

    const mutationLogin = useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            setIsLogin(false);
            setLoading(false);
            let errorCode = (response.ec ??= false);


            if (errorCode === false) {
                console.log("CHeck response login: ", response);
                setIsLogin(true);
                setOtp(response.otp)
            }
        },
        onError: (response) => {
            setLoading(false);
            // xử lý hiển thị error
        },
    });

    const mutationLoginOtp = useMutation({
        mutationFn: loginVerifyOtp,
        onSuccess: (response) => {
            setIsLogin(false);
            let errorCode = (response.ec ??= false);


            if (errorCode === false) {
                setToken({
                    accessToken: response.token,
                    passwordExpiredRemainingDay: 1
                })
                navigate("/")
            }
        },
        onError: (response) => {
            // xử lý hiển thị error
        },
    });

    const onFinish = (values) => {
        if (otp) {
            const payload = {
                email: values.email,
                otp: values.otp,
            };
            mutationLoginOtp.mutate(payload);
        } else {
            const payload = {
                email: values.email,
                password: values.password,
            };
            setLoading(true);
            mutationLogin.mutate(payload);
        }

    }

    return (
        <FormContainer>
            <TitleAuthentication>{AUTH_SIGN_IN_TITLE}</TitleAuthentication>
            <Form
                form={form}
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                layout={'vertical'}
            >
                <FormItemValidateEmail
                    name="email"
                />
                <FormItemValidatePassword
                    name="password"
                />
                {isLogin ? <>
                    <FormItemInputText
                        name="otp"
                        labelText={"OTP (" + otp + ")"}
                        require={true}
                        messageErrorEmpty="Cần nhập OTP"
                    />
                </> : <></>}
                <FormItemStyled marginbottom="15px">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Link to="/forgot-password" text={AUTH_FORGOT_PASSWORD_TITLE} />
                    </div>
                </FormItemStyled>
                <FormItemButtonSubmit formName="sign-in" loading={loading} />
            </Form>
        </FormContainer>
    );
}

export default SignIn;