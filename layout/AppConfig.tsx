'use client';

import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useState } from 'react';
import { LayoutConfig } from '@/types';
import { LayoutContext } from './context/layoutcontext';

const lightThemes = [
    { name: 'lara-light-indigo', label: 'Indigo', image: '/layout/images/themes/lara-light-indigo.png' },
    { name: 'lara-light-blue', label: 'Blue', image: '/layout/images/themes/lara-light-blue.png' },
    { name: 'lara-light-purple', label: 'Purple', image: '/layout/images/themes/lara-light-purple.png' },
    { name: 'lara-light-teal', label: 'Teal', image: '/layout/images/themes/lara-light-teal.png' },
    { name: 'lara-light-green', label: 'Green', color: '#10b981' },
    { name: 'lara-light-cyan', label: 'Cyan', color: '#06b6d4' },
    { name: 'lara-light-amber', label: 'Amber', color: '#f59e0b' },
    { name: 'lara-light-pink', label: 'Pink', color: '#ec4899' }
];

const darkThemes = [
    { name: 'lara-dark-indigo', label: 'Indigo', image: '/layout/images/themes/lara-dark-indigo.png' },
    { name: 'lara-dark-blue', label: 'Blue', image: '/layout/images/themes/lara-dark-blue.png' },
    { name: 'lara-dark-purple', label: 'Purple', image: '/layout/images/themes/lara-dark-purple.png' },
    { name: 'lara-dark-teal', label: 'Teal', image: '/layout/images/themes/lara-dark-teal.png' },
    { name: 'lara-dark-green', label: 'Green', color: '#10b981' },
    { name: 'lara-dark-cyan', label: 'Cyan', color: '#06b6d4' },
    { name: 'lara-dark-amber', label: 'Amber', color: '#f59e0b' },
    { name: 'lara-dark-pink', label: 'Pink', color: '#ec4899' }
];

const AppConfig = () => {
    const [scales] = useState([12, 13, 14, 15, 16]);
    const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
    const { changeTheme } = useContext(PrimeReactContext);

    const _changeTheme = (theme: string, colorScheme: string) => {
        changeTheme?.(layoutConfig.theme, theme, 'theme-css', () => {
            setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, theme, colorScheme }));
        });
    };

    const decrementScale = () => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, scale: prevState.scale - 1 }));
    };

    const incrementScale = () => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, scale: prevState.scale + 1 }));
    };

    const applyScale = () => {
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
    };

    useEffect(() => {
        applyScale();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [layoutConfig.scale]);

    return (
        <div className="p-2">
            <h6 className="mt-0 mb-3 font-semibold text-900">Escala</h6>
            <div className="flex align-items-center mb-4">
                <Button
                    icon="pi pi-minus"
                    type="button"
                    onClick={decrementScale}
                    rounded
                    text
                    className="w-2rem h-2rem mr-2"
                    disabled={layoutConfig.scale === scales[0]}
                ></Button>
                <div className="flex gap-2 align-items-center">
                    {scales.map((item) => (
                        <i
                            className={classNames('pi pi-circle-fill', {
                                'text-primary-500': item === layoutConfig.scale,
                                'text-300': item !== layoutConfig.scale
                            })}
                            key={item}
                        ></i>
                    ))}
                </div>
                <Button
                    icon="pi pi-plus"
                    type="button"
                    onClick={incrementScale}
                    rounded
                    text
                    className="w-2rem h-2rem ml-2"
                    disabled={layoutConfig.scale === scales[scales.length - 1]}
                ></Button>
            </div>

            <h6 className="mb-2 font-semibold text-900">Lara Light</h6>
            <div className="grid mb-3">
                {lightThemes.map((item) => (
                    <div className="col-3 flex justify-content-center" key={item.name}>
                        <button
                            type="button"
                            className={classNames('p-link w-2rem h-2rem border-round border-2 flex align-items-center justify-content-center cursor-pointer', {
                                'border-primary shadow-2': layoutConfig.theme === item.name,
                                'border-transparent surface-hover': layoutConfig.theme !== item.name
                            })}
                            onClick={() => _changeTheme(item.name, 'light')}
                            title={item.name}
                        >
                            {item.image ? (
                                <img src={item.image} className="w-2rem h-2rem border-round" alt={item.label} />
                            ) : (
                                <span className="w-1rem h-1rem border-circle" style={{ backgroundColor: item.color }}></span>
                            )}
                        </button>
                    </div>
                ))}
            </div>

            <h6 className="mb-2 font-semibold text-900">Lara Dark</h6>
            <div className="grid">
                {darkThemes.map((item) => (
                    <div className="col-3 flex justify-content-center" key={item.name}>
                        <button
                            type="button"
                            className={classNames('p-link w-2rem h-2rem border-round border-2 flex align-items-center justify-content-center cursor-pointer', {
                                'border-primary shadow-2': layoutConfig.theme === item.name,
                                'border-transparent surface-hover': layoutConfig.theme !== item.name
                            })}
                            onClick={() => _changeTheme(item.name, 'dark')}
                            title={item.name}
                        >
                            {item.image ? (
                                <img src={item.image} className="w-2rem h-2rem border-round" alt={item.label} />
                            ) : (
                                <span className="w-1rem h-1rem border-circle" style={{ backgroundColor: item.color }}></span>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppConfig;
