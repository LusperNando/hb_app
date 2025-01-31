import { useAuth0 } from '@auth0/auth0-react';
import Google from './images/Google.svg'


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>
    <div className='flex flex-row border p-[0.2vh] border-yellow-200'>
      <img src={Google} alt='Google icon' className='ms-1 w-5 h-6 mr-1'/>
       Continue with Google
    </div>
    </button>;
};

export default LoginButton;
