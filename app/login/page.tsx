import { Button } from "@/components";

const Login = () => {
  
    return ( 
        <div className="justify-center w-72 m-auto">
        <div className="text-lg">Log in Your Account</div>
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
                className="block w-full border-0 rounded-sm py-1 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-java-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="text-java-600 hover:text-java">
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
                  className="block w-full rounded-sm border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-java-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <Button
              type="submit"
              title="Log in"
            />
            </form>
        </div>
     );
}
 
export default Login;