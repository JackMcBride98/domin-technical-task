import dominLogo from '../images/dominLogo.png';

export default function LoginPage({ setIsLoggedIn }) {
  return (
    <div className="flex flex-col pt-8 space-y-2 px-4 text-center justify-between h-screen">
      <div className="flex flex-col items-center space-y-2">
        <img src={dominLogo} alt="Domin logo" className="w-16 h-16" />
        <p className="font-bold text-4xl">DOMIN</p>
        <p className="text-content text-2xl">ASCEND</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-content font-medium">
          Connect to all your Domin products
        </p>
        <p className="text-content text-sm w-64">
          Configure and access data from your devices remotely in a secure
          manner
        </p>
      </div>
      <div className="flex flex-col items-center text-neutral space-y-4 pb-12">
        <button className="p-3 bg-contrast rounded-md w-64 hover:bg-main">
          Get Started
        </button>
        <button
          onClick={() => setIsLoggedIn(true)}
          className="p-3 bg-content rounded-md w-64 hover:bg-main"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
