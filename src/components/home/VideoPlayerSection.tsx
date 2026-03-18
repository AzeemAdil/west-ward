import React from 'react'
import { CONSTANTS } from '../../helpers/constants'
const VideoPlayerSection = () => {
  return (
    <>
    <div className="w-full  bg-red-500"
    style={{height: `calc(100dvh - ${CONSTANTS.navWithListofTextHeight}px) - ${CONSTANTS.mobNavWithLogo}px - ${CONSTANTS.mobNavSticky}px - ${CONSTANTS.desktopNav}px`}}
    >
      Video
    </div>
    </>
  )
}

export default VideoPlayerSection