import Twit from "../Pages/img/link.png"

const BoxOldWeb = () => {
	return (
		<div id="BoxOldWeb">
			<a href="https://x.com/4_rpl42024">
				<div className="flex justify-between relative p-5">
					<img src={Twit} alt="" className="w-auto h-10 " />
					<img src="/next.png" alt="" className="h-4 w-4" />
				</div>
				<div className="text-white flex py-2 opacity-60 absolute bottom-1 text-xs ml-3">Twitter</div>
			</a>
		</div>
	)
}

export default BoxOldWeb
