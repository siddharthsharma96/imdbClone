import Style from "./HeaderIcon.module.css";
export default function HeaderIcon({Icon, title}) {
    return (
        <div className={Style.headerlist}>
            <Icon  className="headerIcon"/>
            <p className="my-2">{title}</p>
        </div>
    )
}
