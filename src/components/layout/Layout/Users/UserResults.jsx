import React, { useContext} from 'react';
import UserItem from './UserItem'
import Spinner from '../Spinner';
import GithubContext from '../Context/Github/GithubContext';
function UserResults() {
  const {users, loading} = useContext(GithubContext)
  
    if(!loading){
    return (
        <div className='mx-20  grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
            {users.map((user)=>(
               <UserItem key={user.id} user={user} />
                
            ))}
        </div>
        );
        
    }
    else{
        return <Spinner/>
    }
    
}
export default UserResults;


