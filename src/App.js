import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { UserList, EditForm, ProfileList, NotFound } from './components/index'
import { fetchUsers } from './redux/actions/users'
import './assets/scss/app.scss'

function App() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        return dispatch(fetchUsers)
    }, [dispatch])
    return (
        <div className="container pt-5">
            <div className="row">
                <Switch>
                    <Route exact path="/" component={() => <UserList />} />
                    <Route exact path="/user/:id">
                        <ProfileList />
                    </Route>
                    <Route exact path="/user/:id/edit" component={EditForm} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </div>
    )
}

export default App
