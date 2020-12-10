
import { WithTranslation } from "next-i18next";

export declare namespace ISideMenu {
    export interface IProps extends WithTranslation { 
        isOpen: boolean | false,
        toggleTheme: function,
        isDark: boolean,
        onSelect: function
    }

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IState { }
}
