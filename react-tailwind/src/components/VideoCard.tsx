
export function VideoCard(props : any){
   return <div>
        <div className="cursor-pointer mt-5">
            <img className={"h-56 w-96 rounded"} src="thumbnail.jpg" alt="" />
            <div className="flex">
               <div className="col-span-1"> 
                <img className={"rounded-full h-12 w-12 ml-3 mt-2"} src="yt-img-logo.png" alt="" />
                </div>             
               <div className="basis-80 ml-5">
                <div className="text-white text-base font-semibold"> A Day in the life of a remote Software developer in US based Company</div>
                 <div className=" text-sm text-gray-400">Harkirat Singh</div>
                 <div className="text-gray-400">{props.views} | 1 year ago</div>
               
                </div>             
            </div>

        </div>
      </div>
}