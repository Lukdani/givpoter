import { useState } from "react";

const useRating = () => {
const [rating, setRating] = useState<number>(0);
const [hoveredRating, setHoveredRating] = useState<number>(0);

const changeRating = (value: number) => {
setRating(value)
}

const changeHoveredRating = (value: number) => {
    setHoveredRating(value)
    }

    const highlightRating = (passedValue: number) => {
        if (passedValue <= hoveredRating) return true
        if (hoveredRating > 0 && passedValue >= hoveredRating) return false;
        if (rating >= passedValue) return true;
        return false
    }

return {rating, hoveredRating, changeRating, changeHoveredRating, highlightRating}
}

export default useRating;