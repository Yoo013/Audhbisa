
import Rating from "../components/Rating"

const Footer = () => {
	return (
		
		<footer className="" id="Footer">
		
			<div class="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div class="md:flex md:justify-between border-t mt-5">
					<div class="mb-6 md:mb-0">
						
					</div>
					<div class=" mt-5 grid grid-cols-2 sm:grid-cols-3">
						<div className="">
							
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">CREATED BY</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2" id="nama">
									<a href="">
										Lidd
									</a>
								</li>
								<li id="nama">
									<a href="">
										Raka

									</a>
								</li>
							</ul>
						</div>
						<div className="">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">Follow us</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
									<a href="https://www.instagram.com/softwareclass4_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="hover:underline ">
										Instagram
									</a>
								</li>
								<li>
									<a href="https://x.com/4_rpl42024" class="hover:underline">
										Twitter
									</a>
								</li>
							</ul>
						</div>
						<div className="hidden md:block">
							<Rating />
						</div>
					</div>

					<div className="flex items-center justify-center mt-8  md:hidden">
						{/* RATING */}
						<Rating />
					</div>
				</div>
				
				<hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="flex mt-4 justify-center sm:mt-0">
						
					</div>
				</div>

			</div>
			
		</footer>
		
	)
}

export default Footer
