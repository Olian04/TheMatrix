import React from 'react';

export interface IMatrixEffectProps {
    height: string | number;
    width: string | number;
}

export interface IMatrixEffectState {
    p: number[];
}

export class MatrixEffect extends React.Component<IMatrixEffectProps, IMatrixEffectState> {
    componentDidMount() {
        const canvas = this.refs.canvas as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        this.setState({
            p: Array(256).join('1').split('').map(parseFloat)
        })

        setInterval(() => {
            if (ctx === null) return;
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(0,255,0,1)";
            this.setState({
                p: this.state.p.map((v, i) => {
                    ctx.fillText(String.fromCharCode(Math.floor(2720 + Math.random() * 33)), i * 10, v);
                    v += 10;
                    if (v > 768 + Math.random() * 10000) {
                        v = 0;
                    }
                    return v;
                })
            });
        }, 33);
    }
    render() {
        return (
            <canvas ref="canvas" height={this.props.height} width={this.props.width}></canvas>
        );
    }
}

export default MatrixEffect;