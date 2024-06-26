import { MdMessage } from 'react-icons/md';

export default function Banner(){
  return(
    <div className="logo">
      <h1 className="logo-icon">
        <MdMessage />
        Post-it
      </h1>
      <h2 className='logo-welcome'>Welcome,</h2>
      <p>Share your thoughts and connect with the world on Post-it</p>
    </div>
  );
}