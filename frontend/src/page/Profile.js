import React from 'react'
import MiniHeader from '../components/MiniHeader'
import profile from '../images/profile1.jpg'

function Profile() {
    return (
        <>
             <MiniHeader name='Profile' page=' / Profile'/>

            <div className="profile">
                <div className="profile-data">

                    <div className="profile-image">
                        <img src={profile} alt="" />
                        <h4 className='profile-title'>Username</h4>

                    </div>

                </div>
                <div className="profile-info">
                    <form action="">
                        <div className='form-control'>
                            <label htmlFor="Full Name">Full Name</label>
                            <input type="text" placeholder='Adelakun Muheez' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor="Email">Email</label>
                            <input type="email" placeholder='Mrlogic@gmail.com' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='........' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" placeholder='07069344331' />
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}

export default Profile