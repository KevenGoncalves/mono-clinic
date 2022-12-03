import React from "react";

const LoginForm = () => (
	<div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
		<div className="flex-1 lg:flex lg:items-center lg:-mx-6">
			<div className="text-white lg:w-1/2 lg:mx-6">
				<div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
					<div className="max-w-xl mx-auto lg:max-w-screen-xl">
						<div className="mb-16 lg:max-w-lg lg:mb-0">
							<div className="max-w-xl mb-6">
								<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl sm:leading-none">
									The quick, brown fox
									<br className="hidden md:block" />
									jumps over &nbsp;
									<span className="relative inline-block px-2">
										<div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
										<span className="relative text-white">lazy dog</span>
									</span>
								</h2>
								<p className="text-base text-zinc-800 md:text-lg">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 lg:w-1/2 lg:mx-6">
				<div className="relative">
					<svg
						viewBox="0 0 52 24"
						fill="currentColor"
						className="absolute bottom-2 right-24 z-0 hidden w-32 -mb-8 -mr-20 text-blue-600 lg:w-32 lg:-mr-16 sm:block"
					>
						<defs>
							<pattern id="766323e1-e594-4ffd-a688-e7275079d540" x={0} y={0} width=".135" height=".30">
								<circle cx={1} cy={1} r=".7" />
							</pattern>
						</defs>
						<rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width={52} height={24} />
					</svg>
					<div className="relative w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
						<h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Brand</h1>
						<form className="mt-6">
							<div>
								<label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">
									Username
								</label>
								<input
									type="text"
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm text-gray-800 dark:text-gray-200"
									>
										Password
									</label>
									<a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
										Forget Password?
									</a>
								</div>
								<input
									type="password"
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<div className="mt-6">
								<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
									Login
								</button>
							</div>
						</form>
						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5" />
							<a
								href="#"
								className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
							>
								or login with Social Media
							</a>
							<span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5" />
						</div>
						<div className="flex items-center mt-6 -mx-2">
							<button
								type="button"
								className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
							>
								<svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
									<path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
								</svg>
								<span className="hidden mx-2 sm:inline">Sign in with Google</span>
							</button>
							<a
								href="#"
								className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-200"
							>
								<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
									<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
								</svg>
							</a>
						</div>
						<p className="mt-8 text-xs font-light text-center text-gray-400">
							{" "}
							Dont have an account?{" "}
							<a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
								Create One
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const Login = () => {
	return (
		<section className="min-h-screen bg-zinc-50">
			<LoginForm />
		</section>
	);
};

export default Login;
