import { BsArchiveFill } from "react-icons/bs";

export default function Header() {
    return (
        <div className="container-inline">
            <h2 className="logo title">TASKIN'</h2>
            <div>
                <button className="button primary">
                    <BsArchiveFill />
                    Archived Tasks
                </button>
            </div>
        </div>
    )
}