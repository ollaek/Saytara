import React, { lazy, Suspense } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const TasksLibrary = lazy(() => import('./Tasks/Library/Library'));
const TaskCreate = lazy(() => import('./Tasks/Create/CreateTask'));
const SignIn = lazy(() => import('./SignIn/SignIn'));

const Shell = () => (
    <Router>
        <Suspense fallback={<div className="loading"></div>}>
            <Switch>
                <Route path='/Dashboard' component={Dashboard} />
                <Route path='/TasksLibrary' component={TasksLibrary} />
                <Route path='/TaskCreate' component={TaskCreate} />
                <Route path='/SignIn' component={SignIn} />
                <Redirect to='/Dashboard' />
            </Switch>
        </Suspense>
    </Router>
);

// const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
//     return (
//       <Route
//         path={path}
//         {...rest}
//         render={props => {
//           return localStorage.getItem("Token") ? (
//             <Comp {...props} />
//           ) : (
//             <Redirect to="/SignIn" />
//           );
//         }}
//       />
//     );
//   };

export default Shell;