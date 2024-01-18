import React from 'react';
import { Outlet } from 'react-router-dom';
import ApplicationLayout from 'components/Layout/ApplicationLayout';

function Application() {

    return (
        <ApplicationLayout>
            <Outlet />
        </ApplicationLayout>
    );
}

export default Application;