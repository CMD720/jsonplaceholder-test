import React from "react"
import ContentLoader from "react-content-loader";

//TODO responsive skeleton!?
const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={833}
        height={150}
        viewBox="0 0 833 150"
        backgroundColor="#e6e5e5"
        foregroundColor="#dcdbdb"
    >
        <rect x="3" y="6" rx="0" ry="0" width="200" height="25" />
        <rect x="15" y="43" rx="0" ry="0" width="770" height="50" />
        <rect x="664" y="105" rx="0" ry="0" width="139" height="25" />
    </ContentLoader>
)

export default Skeleton

