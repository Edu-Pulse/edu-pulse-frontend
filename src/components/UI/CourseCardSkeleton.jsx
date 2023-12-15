import {
	RectangleStackIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { ClockIcon, StarIcon } from "@heroicons/react/24/solid";

import Skeleton from "react-loading-skeleton";

const CourseCardSkeleton = () => {
	return (
		<div>
			<div className="bg-white rounded-2xl shadow-xl object-cover overflow-hidden">
				<div className="h-40 w-full">
					<Skeleton className="h-full w-full" borderRadius={0} />
				</div>
				<div className="p-4">
					<div className="flex justify-between items-center">
						<h5 className="text-darkblue-05 text-sm font-semibold">
							<Skeleton />
						</h5>
						<span className="flex">
							<StarIcon className="h-5 w-5 text-yellow-500" />
							<p className="text-sm ml-1">
								<Skeleton width={24} />
							</p>
						</span>
					</div>
					<h5 className="font-semibold mt-1">
						<Skeleton className="w-full" />
					</h5>
					<p className="text-sm">
						<Skeleton className="w-1/2" />
					</p>
					<p>
						<Skeleton className="w-1/3" />
					</p>
					<div className="flex justify-between text-sm mb-2">
						<span className="flex my-2 gap-1">
							<ShieldCheckIcon className="h-5 w-5 text-green-500" />
							<p>
								<Skeleton width={72} />
							</p>
						</span>
						<span className="flex my-2 gap-1">
							<RectangleStackIcon className="h-5 w-5 text-green-500" />
							<p>
								<Skeleton width={72} />
							</p>
						</span>
						<span className="flex my-2 gap-1">
							<ClockIcon className="h-5 w-5 text-green-500" />
							<p>
								<Skeleton width={72} />
							</p>
						</span>
					</div>
					<Skeleton />
				</div>
			</div>
		</div>
	);
};

export default CourseCardSkeleton;
