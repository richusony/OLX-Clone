import { useContext } from 'react'
import userContext from '../context/UserContexts'

const Profile = () => {
const {user} = useContext(userContext)
  return (
    <section className='px-5 py-4 min-h-screen'>
        <div className='mt-3 flex flex-col justify-center items-center'>
            <div className='mb-4 w-48 h-48 rounded-full shadow-md'>
                <img className='w-full h-full rounded-full' src={user.profileUrl} alt="profile" />
            </div>


            <div className='text-center'>
                <h1 className='text-2xl font-bold'>{user.name}</h1>
                <h2 className='mt-1 text-gray-500 text-xl'>{user.email}</h2>
            </div>
        </div>
    </section>
  )
}

export default Profile