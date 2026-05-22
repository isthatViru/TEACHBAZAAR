import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCode, 
    faBriefcase, 
    faChartBar, 
    faPalette, 
    faBullhorn, 
    faCamera, 
    faPaintBrush, 
    faDumbbell, 
    faMusic 
} from "@fortawesome/free-solid-svg-icons";

const categories = [
    { title: "Development", sub: "Take your journey with this course", icon: faCode },
    { title: "Business", sub: "Take your journey with this course", icon: faBriefcase },
    { title: "Data Science", sub: "Discover the data science", icon: faChartBar },
    { title: "UI/UX Design", sub: "Grow your design skills", icon: faPalette },
    { title: "Marketing", sub: "Take yourself to the next level", icon: faBullhorn },
    { title: "Photography", sub: "Become the great photographer", icon: faCamera },
    { title: "Art & Design", sub: "Grow your design skills", icon: faPaintBrush },
    { title: "Health & Fitness", sub: "Enjoy the healthy life", icon: faDumbbell },
    { title: "Music", sub: "Improve yourself with music", icon: faMusic }
];

const CatCards = () => {
    return (
        <div className="max-w-full mx-auto  py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            
            {categories.map((elem, idx) => (
                <div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition border"
                >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg">
                        <FontAwesomeIcon icon={elem.icon} className="text-indigo-600" />
                    </div>

                    {/* Text */}
                    <div>
                        <div className="font-semibold text-gray-900">{elem.title}</div>
                        <div className="text-sm text-gray-500">{elem.sub}</div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default CatCards;