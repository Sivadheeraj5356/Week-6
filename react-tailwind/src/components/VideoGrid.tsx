import { VideoCard } from "./VideoCard";
import React from "react";
export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 ">
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
       <VideoCard views={"111k views"}></VideoCard>
    </div>
  );
}
// export function VideoGrid({ children } : any) {
//   return (
//     <div className="grid grid-cols-3 gap-4">{children}</div>
//   );
// }

