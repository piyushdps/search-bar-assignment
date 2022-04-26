const Header = () => {

  return (
    // Welcome Animation
    <div className='header-wrapper welcome '>
      <span id="splash-overlay" className="splash"></span>
      
      <span id="welcome" className="z-depth-4"></span>
     {/* NavBar Component  */}
      <div className="header_logo flex items-center p-2 md:mx-44 cursor-pointer">
        <img className='w-20' src="/Images/logo.png" alt="Logo" />
        <h2 className='pl text-xl font-semibold text-blue-700 '>searchcase</h2>
      </div>
      <div className='divider bg-gray-200 w-full'>
      </div>
    </div>)
}

export default Header