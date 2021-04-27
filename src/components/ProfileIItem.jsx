import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import PostList from './PostList'
import { Loading } from './index'

function ProfileItem() {
    const { id } = useParams()
    const { items, isLoaded } = useSelector(({ users }) => users)
    const profile = items.find((item) => +id === item.id)
    return (
        <>
            {isLoaded ? (
                <div className="col-lg-10 offset-lg-1">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <Link to="/" className="btn btn-primary">
                                Назад
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <h1>Профиль</h1>
                        </div>
                        <div className="col-lg-4">
                            <Link
                                to={(location) => `${location.pathname}/edit`}
                                className="btn btn-primary"
                            >
                                Редактировать профиль
                            </Link>
                        </div>
                        <div className="col-lg-12 mt-5 mb-5">
                            <ul>
                                <li>
                                    <b>name:</b> {profile && profile.name}
                                </li>
                                <li>
                                    <b>username:</b>{' '}
                                    {profile && profile.username}
                                </li>
                                <li>
                                    <b>email:</b> {profile && profile.email}
                                </li>
                                <li>
                                    <h3>address:</h3>
                                    <ul>
                                        <li>
                                            <b>street:</b>{' '}
                                            {profile && profile.address.street}
                                        </li>
                                        <li>
                                            <b>suite:</b>{' '}
                                            {profile && profile.address.suite}
                                        </li>
                                        <li>
                                            <b>city:</b>{' '}
                                            {profile && profile.address.city}
                                        </li>
                                        <li>
                                            <b>zipcode:</b>{' '}
                                            {profile && profile.address.zipcode}
                                        </li>
                                        <h4>geo:</h4>
                                        <ul>
                                            <li>
                                                <b>lat:</b>{' '}
                                                {profile &&
                                                    profile.address.geo.lat}
                                            </li>
                                            <li>
                                                <b>lng:</b>{' '}
                                                {profile &&
                                                    profile.address.geo.lng}
                                            </li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <b>phone:</b> {profile && profile.phone}
                                </li>
                                <li>
                                    <b>website:</b> {profile && profile.website}
                                </li>
                                <li>
                                    <h3>Company:</h3>
                                    <ul>
                                        <li>
                                            <b>name:</b>{' '}
                                            {profile && profile.company.name}
                                        </li>
                                        <li>
                                            <b>catchPhrase:</b>{' '}
                                            {profile &&
                                                profile.company.catchPhrase}
                                        </li>
                                        <li>
                                            <b>bs:</b>{' '}
                                            {profile && profile.company.bs}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <h2>Мои посты</h2>
                            <PostList userId={id} />
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default ProfileItem
