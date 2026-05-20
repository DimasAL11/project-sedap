import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./frameworklist";
import FrameworkListSearch from "./FrameworkListSearch";
import Responsive from "./Responsive";

createRoot (document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            <FrameworkListSearch/>
            {/* <responsive/> */}
        </div>
    )