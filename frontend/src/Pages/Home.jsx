

import Navbar from '../components/Navbar'

import { TypeAnimation } from 'react-type-animation';

const Home = () => {
	return (
		<div className="text-white px-[10%]" id="Home">
			<Navbar />
			<div className="lg:hidden">
				<div className="font-bold text-5xl text-center py-20 ">X RPL 4</div>
				<div
					className="border-2 flex justify-between px-10 text-4xl font-bold py-2 relative"
					id="TotalSiswa">
					<div id="AngkaGradientBlue" className="flex items-center justify-center ">
						28
					</div>
					<div className="">
						<span id="AngkaGradientBlue" className="text-5xl">
							3
						</span>
						<span id="AngkaGradientPink" className="text-5xl">
							2
						</span>
					</div>
					<div id="AngkaGradientPink" className="flex items-center justify-center">
						4
					</div>
				</div>

				</div>
				
			

			{/* Dekstop */}
			<div className="hidden lg:block">
				<div className="flex justify-center items-center flex-col h-[100vh]">
					
					<h1 className="text-2xl font-extrabold mb-3" id="Glow">
					<TypeAnimation
					sequence={[
					  // Same substring at the start will only be typed out once, initially
					  'Hi,Everyone!',
					  1000, // wait 1s before replacing "Mice" with "Hamsters"
					  'Welcome',
					  1000
					]}
					wrapper="span"
					speed={20}
					style={{ fontSize: '2em', display: 'inline-block' }}
					repeat={Infinity}
				  />
					</h1>
					<h6 className="text-sm" style={{ letterSpacing: "5px" }}>
						TO X RPL 4
					</h6>
				</div>
			</div>
		</div>
	)
}

export default Home
