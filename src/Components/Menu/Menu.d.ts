import {WithTranslation} from 'next-i18next'

export declare module IMenu {
    export interface IProps extends WithTranslation { 
        onSelected: function
    }

    export interface IState { }
}
