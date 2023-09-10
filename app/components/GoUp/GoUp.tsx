'use client'
import './GoUp.scss';
import {AiOutlineUp} from "react-icons/ai";
const GoUp = () => {
    const handleSwipeUp = () => {
        window.scrollTo(0 ,0)
    }
  return (
    <>
        <div className="upArrow" onClick={handleSwipeUp}>
            <AiOutlineUp/>
        </div>
    </>
  )
}

export default GoUp