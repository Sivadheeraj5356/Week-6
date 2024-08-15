import { Searchbar } from "./Searchbar"
export function Topbar(){
    return ( <div className="flex justify-around">
        <div className="text-xl inline-flex items-center"> YouTube </div>
        <div> <Searchbar></Searchbar> </div>
        <div className="text-xl inline-flex items-center"> Sign In</div>

    </div> )
}