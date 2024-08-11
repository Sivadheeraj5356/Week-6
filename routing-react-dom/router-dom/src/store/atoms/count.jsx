import {atom, selector} from "recoil"

export const countAtom = atom({
    default: 0,
    key : "countAtom"
})

export const evenSelector = selector({
    key : "evenSelector",
    get : ({get})=>{
   const count = get(countAtom)
   return count % 2;
    }
})