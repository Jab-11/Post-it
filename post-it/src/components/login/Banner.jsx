import { MdPostAdd, MdMessage } from 'react-icons/md';

export default function Banner(){
  return(
    <div className="logo">
      <h1 className="logo-icon">
        <MdMessage />
        Post-it
      </h1>
      <p className="logo-welcome">Welcome,</p>
      <p>Organize your notes effortlessly with Post-it!</p>
    </div>
  );
}