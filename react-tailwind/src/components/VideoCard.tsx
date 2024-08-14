
export function VideoCard(props : any){
   return <div>
        <div>
            <img className={"h-56 w-96 rounded"} src="thumbnail.jpg" alt="" />
            <div className="grid grid-cols-12">
               <div className="col-span-1"> 
                <img className={"rounded-full h-12 w-12"} src="yt-img-logo.png" alt="" />
                </div>             
               <div className="col-span-4 col-start-2 mr-5">
                <div className="text-white text-base font-semibold"> A Day in the life of a remote Software developer for a US based Company</div>
                 <div className=" text-sm text-gray-400">Harkirat Singh</div>
                 <div className="text-gray-400">{props.views} | 1 year ago</div>
               
                </div>             
            </div>

        </div>
      </div>
}