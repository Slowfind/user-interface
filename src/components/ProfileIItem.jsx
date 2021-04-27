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
                            <ul className="user__profile">
                                <li>
                                    <span>name:</span> {profile && profile.name}
                                </li>
                                <li>
                                    <span>username:</span>{' '}
                                    {profile && profile.username}
                                </li>
                                <li>
                                    <span>email:</span>{' '}
                                    {profile && profile.email}
                                </li>
                                <li>
                                    <h3>address:</h3>
                                    <ul>
                                        <li>
                                            <span>street:</span>{' '}
                                            {profile && profile.address.street}
                                        </li>
                                        <li>
                                            <span>suite:</span>{' '}
                                            {profile && profile.address.suite}
                                        </li>
                                        <li>
                                            <span>city:</span>{' '}
                                            {profile && profile.address.city}
                                        </li>
                                        <li>
                                            <span>zipcode:</span>{' '}
                                            {profile && profile.address.zipcode}
                                        </li>
                                        <h4>geo:</h4>
                                        <ul>
                                            <li>
                                                <span>lat:</span>{' '}
                                                {profile &&
                                                    profile.address.geo.lat}
                                            </li>
                                            <li>
                                                <span>lng:</span>{' '}
                                                {profile &&
                                                    profile.address.geo.lng}
                                            </li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <span>phone:</span>{' '}
                                    {profile && profile.phone}
                                </li>
                                <li>
                                    <span>website:</span>{' '}
                                    {profile && profile.website}
                                </li>
                                <li>
                                    <h3>Company:</h3>
                                    <ul>
                                        <li>
                                            <span>name:</span>{' '}
                                            {profile && profile.company.name}
                                        </li>
                                        <li>
                                            <span>catchPhrase:</span>{' '}
                                            {profile &&
                                                profile.company.catchPhrase}
                                        </li>
                                        <li>
                                            <span>bs:</span>{' '}
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
