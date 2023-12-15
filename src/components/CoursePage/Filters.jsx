import Checkbox from "@/components/UI/Checkbox";
import Button from "@/components/UI/Button";
const Filters = ({
	setFilterByDateAndPromo,
	filterByDateAndPromo,
	setFilterByCategory,
	filterByCategory,
	setFilterByLevel,
	filterByLevel,
	onCloseDrawer,
}) => {
	const handleResetFilter = () => {
		setFilterByCategory({
			uiux_design: false,
			web_development: false,
			android_development: false,
			data_science: false,
			business_intelligence: false,
		});
		setFilterByLevel({
			all_level: false,
			beginner_level: false,
			intermediate_level: false,
			advanced_level: false,
		});
		setFilterByDateAndPromo({
			newest: false,
			most_popular: false,
			promo: false,
		});
	};

	return (
		<div
			className="px-4 md:p-0 bg-white mt-4 md:m-0 md:rounded-none rounded-xl"
			aria-labelledby="dropdownDefaultButton"
		>
			{/* Basic Filter */}
			<div className="py-4 space-y-2">
				<h2 className="font-bold">Filter</h2>
				<Checkbox
					label="Paling Baru"
					id="palingbaru"
					value="newest"
					onClick={(e) =>
						setFilterByDateAndPromo((current) => ({
							...current,
							newest: e.target.checked,
						}))
					}
					isChecked={filterByDateAndPromo.newest}
				/>
				<Checkbox
					label="Paling Populer"
					id="palingpopuler"
					value="most_popular"
					onClick={(e) =>
						setFilterByDateAndPromo((current) => ({
							...current,
							most_popular: e.target.checked,
						}))
					}
					isChecked={filterByDateAndPromo.most_popular}
				/>
				<Checkbox
					label="Promo"
					id="promo"
					value="promo"
					onClick={(e) =>
						setFilterByDateAndPromo((current) => ({
							...current,
							promo: e.target.checked,
						}))
					}
					isChecked={filterByDateAndPromo.promo}
				/>
			</div>
			{/* Category filter */}
			<div className="py-4 space-y-2">
				<h2 className="font-bold">Kategori</h2>
				<Checkbox
					label="UI/UX Design"
					id="uiuxdesign"
					value="uiuxdesign"
					onClick={(e) =>
						setFilterByCategory((current) => ({
							...current,
							uiux_design: e.target.checked,
						}))
					}
					isChecked={filterByCategory.uiux_design}
				/>
				<Checkbox
					label="Web Development"
					id="webdevelopment"
					value="webdevelopment"
					onClick={(e) =>
						setFilterByCategory((current) => ({
							...current,
							web_development: e.target.checked,
						}))
					}
					isChecked={filterByCategory.web_development}
				/>
				<Checkbox
					label="Android Development"
					id="androiddevelopment"
					value="androiddevelopment"
					onClick={(e) =>
						setFilterByCategory((current) => ({
							...current,
							android_development: e.target.checked,
						}))
					}
					isChecked={filterByCategory.android_development}
				/>
				<Checkbox
					label="Data Science"
					id="datascience"
					value="datascience"
					onClick={(e) =>
						setFilterByCategory((current) => ({
							...current,
							data_science: e.target.checked,
						}))
					}
					isChecked={filterByCategory.data_science}
				/>
				<Checkbox
					label="Business Intelligence"
					id="businessintelligence"
					value="businessintelligence"
					onClick={(e) =>
						setFilterByCategory((current) => ({
							...current,
							business_intelligence: e.target.checked,
						}))
					}
					isChecked={filterByCategory.business_intelligence}
				/>
			</div>

			<div className="py-4 space-y-2">
				<h2 className="font-bold">Level Kesulitan</h2>
				<Checkbox
					label="Semua Level"
					id="semualevel"
					value="semualevel"
					onClick={(e) =>
						setFilterByLevel((current) => ({
							...current,
							all_level: e.target.checked,
						}))
					}
					isChecked={filterByLevel.all_level}
				/>
				<Checkbox
					label="Beginner Level"
					id="beginnerlevel"
					value=""
					onClick={(e) =>
						setFilterByLevel((current) => ({
							...current,
							beginner_level: e.target.checked,
						}))
					}
					isChecked={filterByLevel.beginner_level}
				/>
				<Checkbox
					label="Intermediate Level"
					id="intermediatelevel"
					value=""
					onClick={(e) =>
						setFilterByLevel((current) => ({
							...current,
							intermediate_level: e.target.checked,
						}))
					}
					isChecked={filterByLevel.intermediate_level}
				/>
				<Checkbox
					label="Advanced Level"
					id="advancedlevel"
					value=""
					onClick={(e) =>
						setFilterByLevel((current) => ({
							...current,
							advanced_level: e.target.checked,
						}))
					}
					isChecked={filterByLevel.advanced_level}
				/>
			</div>
			<div className="flex gap-2">
				<Button
					onClick={handleResetFilter}
					color="danger"
					size="lg"
					className="!text-sm mt-4 w-1/2 sm:w-fit"
				>
					Hapus Filter
				</Button>
				<Button
					onClick={onCloseDrawer}
					color="primary"
					size="lg"
					className="!text-sm mt-4 w-1/2 sm:hidden"
				>
					Simpan
				</Button>
			</div>
		</div>
	);
};

export default Filters;
