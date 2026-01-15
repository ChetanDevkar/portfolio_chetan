import { useState } from "react";
import React from "react";
import Image from "next/image";

const projects = [

	{
		title: "Storynet",
		image: "/images/storynet.png",
		description:"Storynet: Inspiring stories of Indian Heroes. Share your real-life story to inspire others! A community platform for motivation, courage, and national pride.",
		details: ` StoryNet is a full-stack web application built with HTML, CSS, and JavaScript for the frontend to create responsive, interactive user interfaces featuring dynamic story feeds, 
		rich text editors with multimedia support. The backend leverages Node.js to power server-side logic, including secure API endpoints for user authentication, story creation/editing, likes, comments, and shares that foster community engagement. MySQL serves as the relational database, efficiently storing and querying user profiles, 
		story content, metadata, and interactions to support the platform's real-time features and scalable content management..`,
		tech: ["React", "Node.js", "html "," CSS", "SQL", "JavaScript", ],
		features: [
			"User story creation and editing",
            "Rich text editor with multimedia support",
			"Dynamic story feed with likes/comments",
			"Node.js backend and MySQL database",
			"Responsive design for all devices",
			
		],
		github: "https://github.com/ChetanDevkar/Storynet",
		demo: "https://chetandevkar.github.io/Storynet/",
	},
	
];

export default function ProjectsSection() {
	const [openIdx, setOpenIdx] = useState(null);
	const detailsRef = React.useRef(null);

	React.useEffect(() => {
		if (openIdx !== null && detailsRef.current) {
			detailsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	}, [openIdx]);

	// Helper to chunk projects into rows of 3 (for lg:grid-cols-3)
	const chunked = [];
	for (let i = 0; i < projects.length; i += 3) {
		chunked.push(projects.slice(i, i + 3));
	}

	return (
		<section className="py-12 bg-[#181818]">
			<h2 className="text-3xl font-bold mb-6 text-center text-[#64ffda]">
				Projects
			</h2>
			<div className="max-w-6xl mx-auto px-4">
				{chunked.map((row, rowIdx) => {
					// Check if any card in this row is open
					const openInRow = row.find(
						(_, idx) => openIdx === rowIdx * 3 + idx
					);
					return (
						<div
							key={rowIdx}
							className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
								openInRow ? "hidden" : "mb-0"
							} relative`}
						>
							{row.map((project, idx) => {
								const globalIdx = rowIdx * 3 + idx;
								const isOpen = openIdx === globalIdx;
								return (
									<React.Fragment key={globalIdx}>
										{/* If this card is open, render a placeholder and the expanded card below the row */}
										<div className="contents">
											<div className="h-full">
												<div
													className={`bg-[#222] rounded-2xl shadow-lg overflow-hidden flex flex-col group mb-15 transition-transform duration-300 ${
														isOpen
															? "opacity-0 pointer-events-none"
															: "hover:scale-105 hover:shadow-2xl"
													}`}
													style={{
														visibility: isOpen
															? "hidden"
															: "visible",
														minHeight: "340px",
													}}
												>
													<button
														className="relative w-full h-56 focus:outline-none"
														onClick={() =>
															setOpenIdx(
																isOpen ? null : globalIdx
															)
														}
														aria-expanded={isOpen}
														aria-controls={`project-details-${globalIdx}`}
														tabIndex={0}
													>
														{(project.image || project.images) && (
															<Image
																src={project.image || project.images}
																alt={project.title + " screenshot"}
																fill
																className="object-cover group-hover:brightness-90 transition"
																sizes="(max-width: 768px) 100vw, 33vw"
															/>
														)}
														<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
															<span className="text-[#64ffda] text-lg font-bold">
																View Details
															</span>
														</div>
													</button>
													<div className="p-6 flex-1 flex flex-col">
														<h3 className="text-xl font-bold text-white mb-2">
															{project.title}
														</h3>
														<p className="text-[#ADB7BE] mb-4 flex-1">
															{project.description}
														</p>
														<div className="flex flex-wrap gap-2 mb-4">
															{project.tech.map((tech, i) => (
																<span
																	key={i}
																	className="bg-[#181818] text-[#64ffda] px-2 py-1 rounded text-xs font-semibold border border-[#64ffda]/30"
																>
																	{tech}
																</span>
															))}
														</div>
														<div className="flex gap-4 mt-auto">
															{project.github && (
																<a
																	href={project.github}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline"
																>
																	GitHub
																</a>
															)}
															{project.demo && (
																<a
																	href={project.demo}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline"
																>
																	Live Demo
																</a>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* Expanded card after the row if open */}
										{(isOpen &&
											(idx === row.length - 1 || row.length === 1)) && (
											<div className="col-span-full w-full flex justify-center">
												<div
													className="bg-[#222] rounded-2xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-500 max-w-4xl w-full z-20 mt-2 mb-6 animate-fade-in-expand"
													style={{ minHeight: "380px" }}
												>
													<button
														className="relative w-full h-72 focus:outline-none"
														onClick={() => setOpenIdx(null)}
														aria-expanded={isOpen}
														aria-controls={`project-details-${globalIdx}`}
														tabIndex={0}
													>
														{(project.image || project.images) && (
															<Image
																src={project.image || project.images}
																alt={project.title + " screenshot"}
																fill
																className="object-cover group-hover:brightness-90 transition"
																sizes="100vw"
															/>
														)}
														<div className="absolute inset-0 bg-black/40 opacity-100 transition flex items-center justify-center">
															<span className="text-[#64ffda] text-lg font-bold">
																Close
															</span>
														</div>
													</button>
													<div className="p-8 flex-1 flex flex-col">
														<h3 className="text-2xl font-bold text-white mb-4">
															{project.title}
														</h3>
														<p className="text-[#ADB7BE] mb-6 text-base whitespace-pre-line">
															{project.details}
														</p>
														{project.features && (
															<ul className="list-disc list-inside text-[#64ffda] mb-6 space-y-1">
																{project.features.map((feature, i) => (
																	<li key={i}>{feature}</li>
																))}
															</ul>
														)}
														<div className="flex flex-wrap gap-2 mb-6">
															{project.tech.map((tech, i) => (
																<span
																	key={i}
																	className="bg-[#181818] text-[#64ffda] px-3 py-1 rounded text-sm font-semibold border border-[#64ffda]/30"
																>
																	{tech}
																</span>
															))}
														</div>
														<div className="flex gap-6 mt-auto">
															{project.github && (
																<a
																	href={project.github}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline text-lg"
																>
																	GitHub
																</a>
															)}
															{project.demo && (
																<a
																	href={project.demo}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline text-lg"
																>
																	Live Demo
																</a>
															)}
														</div>
													</div>
												</div>
											</div>
										)}
										{/* If open and not last in row, render expanded after this card */}
										{isOpen && idx !== row.length - 1 && row.length > 1 && (
											<div className="col-span-full w-full flex justify-center">
												<div
													className="bg-[#222] rounded-2xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-500 max-w-4xl w-full z-20 mt-2 mb-6 animate-fade-in-expand"
													style={{ minHeight: "380px" }}
												>
													<button
														className="relative w-full h-72 focus:outline-none"
														onClick={() => setOpenIdx(null)}
														aria-expanded={isOpen}
														aria-controls={`project-details-${globalIdx}`}
														tabIndex={0}
													>
														{(project.image || project.images) && (
															<Image
																src={project.image || project.images}
																alt={project.title + " screenshot"}
																fill
																className="object-cover group-hover:brightness-90 transition"
																sizes="100vw"
															/>
														)}
														<div className="absolute inset-0 bg-black/40 opacity-100 transition flex items-center justify-center">
															<span className="text-[#64ffda] text-lg font-bold">
																Close
															</span>
														</div>
													</button>
													<div className="p-8 flex-1 flex flex-col">
														<h3 className="text-2xl font-bold text-white mb-4">
															{project.title}
														</h3>
														<p className="text-[#ADB7BE] mb-6 text-base whitespace-pre-line">
															{project.details}
														</p>
														{project.features && (
															<ul className="list-disc list-inside text-[#64ffda] mb-6 space-y-1">
																{project.features.map((feature, i) => (
																	<li key={i}>{feature}</li>
																))}
															</ul>
														)}
														<div className="flex flex-wrap gap-2 mb-6">
															{project.tech.map((tech, i) => (
																<span
																	key={i}
																	className="bg-[#181818] text-[#64ffda] px-3 py-1 rounded text-sm font-semibold border border-[#64ffda]/30"
																>
																	{tech}
																</span>
															))}
														</div>
														<div className="flex gap-6 mt-auto">
															{project.github && (
																<a
																	href={project.github}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline text-lg"
																>
																	GitHub
																</a>
															)}
															{project.demo && (
																<a
																	href={project.demo}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline text-lg"
																>
																	Live Demo
																</a>
															)}
														</div>
													</div>
												</div>
											</div>
										)}
									</React.Fragment>
								);
							})}
						</div>
					);
				})}
				{/* Render expanded card in a separate row, not inside the grid */}
				{openIdx !== null && (() => {
					const project = projects[openIdx];
					return (
						<div className="w-full flex justify-center" ref={detailsRef}>
							<div
								className="bg-[#222] rounded-2xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-500 max-w-4xl w-full z-20 mt-2 mb-6 animate-fade-in-expand"
								style={{ minHeight: "380px" }}
							>
								<button
									className="relative w-full h-72 focus:outline-none"
									onClick={() => setOpenIdx(null)}
									aria-expanded={true}
									aria-controls={`project-details-${openIdx}`}
									tabIndex={0}
								>
									{(project.image || project.images) && (
										<Image
											src={project.image || project.images}
											alt={project.title + " screenshot"}
											fill
											className="object-cover group-hover:brightness-90 transition"
											sizes="100vw"
										/>
									)}
									<div className="absolute inset-0 bg-black/40 opacity-100 transition flex items-center justify-center">
										<span className="text-[#64ffda] text-lg font-bold">
											Close
										</span>
									</div>
								</button>
								<div className="p-8 flex-1 flex flex-col">
									<h3 className="text-2xl font-bold text-white mb-4">
										{project.title}
									</h3>
									<p className="text-[#ADB7BE] mb-6 text-base whitespace-pre-line">
										{project.details}
									</p>
									{project.features && (
										<ul className="list-disc list-inside text-[#64ffda] mb-6 space-y-1">
											{project.features.map((feature, i) => (
												<li key={i}>{feature}</li>
											))}
										</ul>
									)}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className="bg-[#181818] text-[#64ffda] px-3 py-1 rounded text-sm font-semibold border border-[#64ffda]/30"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-6 mt-auto">
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#64ffda] hover:text-white transition underline text-lg"
											>
												GitHub
											</a>
										)}
										{project.demo && (
											<a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#64ffda] hover:text-white transition underline text-lg"
											>
												Live Demo
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					);
				})()}
			</div>
			{/* Add keyframes for fade-in-expand in your global CSS */}
		</section>
	);
}

/* Add this to your global CSS (e.g., globals.css):
@keyframes fade-in-expand {
  from {
    opacity: 0;
    transform: scaleX(0.95);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
*/
