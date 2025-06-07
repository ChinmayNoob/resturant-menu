import { GiChickenOven } from "react-icons/gi";
import { IoBeerOutline } from "react-icons/io5";
import { LuIceCreamBowl, LuSalad } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";


export const menuOptions = [
    {
        key: "starters",
        icon: MdFastfood,
        label: "Starters",
        href: "#starters",
    },
    {
        key: "salads",
        icon: LuSalad,
        label: "Salads",
        href: "#salads",
    },
    {
        key: "maindishes",
        icon: GiChickenOven,
        label: "Main dishes",
        href: "#maindishes",
    },
    {
        key: "beverages",
        icon: IoBeerOutline,
        label: "Beverages",
        href: "#beverages",
    },
    {
        key: "deserts",
        icon: LuIceCreamBowl,
        label: "Desserts",
        href: "#deserts",
    },
]; 