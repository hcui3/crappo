const AccountBtns = () => {
  return (
    <div className="flex items-center gap-6 font-medium">
      <a className="hover:text-blue transition-all duration-300" href="#">
        Login
      </a>

      {/* separator */}
      <span className="text-white/20 font-thin">|</span>

      {/* register btn */}
      <button className="btn h-12 text-base">Register</button>
    </div>
  );
};

export default AccountBtns;
