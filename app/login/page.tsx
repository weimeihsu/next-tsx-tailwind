const Login = () => {
  
    return ( 
        <div className="justify-center w-72 m-auto mt-4">
        <h1 className="text-xl my-4">Log in Your Account</h1>
            <form className="space-y-4" action="#" method="POST">
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral">
                Email address
            </label>
            <div className="mt-1">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full border-0 rounded-sm py-1 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-spray-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="text-spray-600 hover:text-spray">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-sm border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-spray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
                type="submit"
                className="flex w-full justify-center rounded-sm bg-supernova px-3 py-1.5 text-sm leading-6 shadow-sm hover:bg-supernova-700"
              >
                Log in
            </button>
            </form>
        </div>
     );
}
 
export default Login;