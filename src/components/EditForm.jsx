import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Loading } from './index'
import { addUser, editUser } from '../redux/actions/users'

function EditForm({ match }) {
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.users)
    const isLoaded = useSelector(({ users }) => users.isLoaded)
    const id = +match.params.id

    const user = items.find((item) => id === item.id)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: user && user.name,
            username: user && user.username,
            email: user && user.email,
            address: {
                street: user && user.address.street,
                suite: user && user.address.suite,
                city: user && user.address.city,
                zipcode: user && user.address.zipcode,
                geo: {
                    lat: user && user.address.geo.lat,
                    lng: user && user.address.geo.lng,
                },
            },
            phone: user && user.phone,
            website: user && user.website,
            company: {
                name: user && user.company.name,
                catchPhrase: user && user.company.catchPhrase,
                bs: user && user.company.bs,
            },
        },
    })
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    const onSubmit = React.useCallback(
        async (data) => {
            data.id = id
            items.length + 1 > id
                ? dispatch(editUser(data))
                : dispatch(addUser(data))
            await sleep(1000)
        },
        [dispatch, id, items.length]
    )
    return (
        <>
            {isLoaded ? (
                <div className="col-lg-8">
                    <Link to="/" className="btn btn-primary">
                        Назад
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        placeholder="name"
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        {...register('name', {
                                            required: 'this is a required',
                                        })}
                                    />
                                    {errors.name && (
                                        <p>{errors.name.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        placeholder="username"
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        {...register('username', {
                                            required: 'this is a required',
                                        })}
                                    />
                                    {errors.username && (
                                        <p>{errors.username.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        placeholder="email"
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        {...register('email', {
                                            required: 'this is a required',
                                        })}
                                    />
                                    {errors.email && (
                                        <p>{errors.email.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="street">Street</label>
                                    <input
                                        placeholder="street"
                                        type="text"
                                        className="form-control"
                                        id="street"
                                        {...register('address.street')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="suite">Suite</label>
                                    <input
                                        placeholder="suite"
                                        type="text"
                                        className="form-control"
                                        id="suite"
                                        {...register('address.suite')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        placeholder="city"
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        {...register('address.city')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <input
                                        placeholder="zipcode"
                                        type="text"
                                        className="form-control"
                                        id="zipcode"
                                        {...register('address.zipcode')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="lat">Lat</label>
                                    <input
                                        placeholder="lat"
                                        type="text"
                                        className="form-control"
                                        id="lat"
                                        {...register('address.geo.lat')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="lng">Lng</label>
                                    <input
                                        placeholder="lng"
                                        type="text"
                                        className="form-control"
                                        id="lng"
                                        {...register('address.geo.lng')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        placeholder="phone"
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        {...register('phone', {
                                            required: 'this is a required',
                                        })}
                                    />
                                    {errors.phone && (
                                        <p>{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <input
                                        placeholder="website"
                                        type="text"
                                        className="form-control"
                                        id="website"
                                        {...register('website')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="companyName">
                                        Company name
                                    </label>
                                    <input
                                        placeholder="companyName"
                                        type="text"
                                        className="form-control"
                                        id="companyName"
                                        {...register('company.name')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="catchPhrase">
                                        catchPhrase
                                    </label>
                                    <input
                                        placeholder="catchPhrase"
                                        type="text"
                                        className="form-control"
                                        id="catchPhrase"
                                        {...register('company.catchPhrase')}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="bs">bs</label>
                                    <input
                                        placeholder="bs"
                                        type="text"
                                        className="form-control"
                                        id="bs"
                                        {...register('company.bs')}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Сохранить
                        </button>
                    </form>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default EditForm
