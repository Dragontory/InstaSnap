import React from "react";
import SuggestionCard from "./SuggestionCard";

const HomeRight = () => {
    return (
        <div className="border">
            <div>
                <div>
                    <div className="flex items-center">
                        <div>
                            <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2024/08/26/23/38/maranhao-sheets-9000410_1280.jpg" alt="" />
                        </div>
                        <div className="ml-3">
                            <p>Full Name</p>
                            <p className="opacity-70">username</p>
                        </div>
                    </div>

                    <div>
                        {[1,1,1,1,1].map((item) => <SuggestionCard />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRight;