import { useEffect, useState } from 'react';

const LogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the text to be visible after the component mounts
    setIsVisible(true);

    // Set a timeout to move the text after 1 second
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Adjust the duration as needed

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed flex flex-col items-center justify-center  bg-zinc-900 inset-0  transition-transform duration-700 ${isVisible ? 'translate-x-0 translate-y-0' : 'translate-x-[-50vw] translate-y-[-50vh]'}`}>
      <span className={`text-4xl font-bold transition-transform duration-700`}>
        Your Text Here
      </span>   
    </div>
  );
};

export default LogoAnimation;
