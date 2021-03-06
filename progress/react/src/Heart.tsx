import React, { Component } from 'react';
import { rangeValue, defaultProps } from './utilities';
import * as IconTypes from './types';

const basePath: IconTypes.IconPath =
    'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
const outlinedPath: IconTypes.IconPath =
    'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';

const getPath: IconTypes.GetPathFunction = (outlined) => (outlined ? outlinedPath : basePath);

export class Heart extends Component<IconTypes.IconPropType> {
    startY: number;
    fillHeight: number;

    constructor(props: IconTypes.IconPropType) {
        super(props);
        const _props = {...this.props, ...defaultProps};
        this.startY = this.startY = _props.outlined ? 18.35 : 21.35;
        this.fillHeight = _props.outlined ? 13.35 : 18.35;
    }

    render(): JSX.Element {
        const { outlined, size, percent, color, charging, ...props } = {...defaultProps, ...this.props};
        return (
            <svg height={`${size}px`} width={`${size}px`} x="0px" y="0px" viewBox="0 0 24 24" {...props}>
                <path
                    fill={color || 'currentColor'}
                    fillOpacity={outlined || percent >= 100 ? '1' : '0.3'}
                    d={getPath(outlined)}
                />
                <clipPath id="pxb-heart-clip">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </clipPath>
                {percent > 0 && (
                    <rect
                        fill={color || 'currentColor'}
                        clipPath="url(#pxb-heart-clip)"
                        x="2"
                        y={this.startY - (rangeValue(percent, 0, 100) * this.fillHeight) / 100}
                        width="20"
                        height="20"
                    />
                )}
            </svg>
        );
    }
}
