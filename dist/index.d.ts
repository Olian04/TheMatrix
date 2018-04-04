/// <reference types="react" />
import React from 'react';
export interface IMatrixEffectProps {
    height: string | number;
    width: string | number;
}
export interface IMatrixEffectState {
    p: number[];
}
export declare class MatrixEffect extends React.Component<IMatrixEffectProps, IMatrixEffectState> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export default MatrixEffect;
