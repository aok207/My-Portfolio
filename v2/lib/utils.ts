import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function generateSlideLeft() {
//   return {
//     initial: "hidden",
//     animate: "visible",
//     varient: {
//       hidden: {
//         opactiy: 0,
//         x: -800
//       },
//       visible: {
//         opacity: 1,
//         x: 0
//       }
//     }
//   }
// }
