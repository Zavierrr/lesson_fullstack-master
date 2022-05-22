import { useState } from "react";

// function Screen({ logo, showContent }) {
//     // console.log(props);
//     return (
//         <div>
//             Screen {logo}{showContent}
//         </div>
//     )
// }
function Screen(props) {
    // console.log(props);
    return (
        <div>
            Screen {props.logo}{props.showContent}
        </div>
    )
}
export default Screen