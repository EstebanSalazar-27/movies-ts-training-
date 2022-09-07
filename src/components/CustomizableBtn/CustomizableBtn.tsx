import { NATIVES_JSX_TYPES } from "@/models/JSX_TYPES";

enum bgColor {
    BLUE_SKY_600 = "bg-sky-600",
    BLUE_SKY_400 = "bg-sky-400",

}
type CustomProps = {
    children: NATIVES_JSX_TYPES["children"] | string;
    disabledBtn: boolean;
    fnActions?: {
        nextPage?: () => void,
        prevPage?: () => void
    };
    stylesBtn: {
        padding: string,
        width: string,
        height: string,
        fontSize: string,
        fontWeight: string,
        color: string,
        bgColor?: string,
    };
}
export const CustomizableBtn = ({ fnActions, stylesBtn, children, disabledBtn }: CustomProps) => {
    const disabledBtnStyles = disabledBtn ? "bg-sky-800/90" : ""
    return (
        <button
            disabled={disabledBtn}
            className={`
            ${disabledBtnStyles}
            ${stylesBtn.bgColor}
             ${stylesBtn.color}
              ${stylesBtn.fontSize}
               ${stylesBtn.fontWeight}
                ${stylesBtn.height}           
                ${stylesBtn.width}
                ${stylesBtn.padding}
                `}
            onClick={fnActions?.nextPage || fnActions?.prevPage}
        >
            {children}
        </button>
    )
}