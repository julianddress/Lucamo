import React, { useState } from 'react';

const Categories = () => {

    const [ActiveButton, setActiveButton] = useState(2);

    const HandleButtonClick = (button) => {
        setActiveButton(button);
    }

    return (
        <div className="col-span-2  hidden lg:flex items-center">
            <ul className="flex gap-2 list-none items-center">
                <li>
                    <button
                        className="px-3 py-1  text-white rounded-xl w-min "
                        onClick={() => HandleButtonClick(1)}
                        style={{ backgroundColor: ActiveButton === 1 ? '#7e22ce' : 'inherit', 
                                fontWeight: ActiveButton === 1 ? 'bold' : 'normal', 
                                border: ActiveButton === 1 ? 'normal' : 'solid 2px #10385e', 
                                transition: 'all 0.3s ease',
                        }}
                    >
                        <a href="# " className="lg:text-xs">
                            PRODUCTOS LOCALES
                        </a>
                    </button>
                </li>
                <li>
                    <span className="text-white text-3xl font-semibold">|</span>
                </li>
                <li>
                    <button
                        className="px-4 py-2  text-white rounded-xl"
                        onClick={() => HandleButtonClick(2)}
                        style={{ backgroundColor: ActiveButton === 2 ? '#7e22ce' : 'inherit' ,
                                fontWeight: ActiveButton === 2 ? 'bold' : 'normal',
                                border: ActiveButton === 1 ? 'normal' : 'solid 2px #10385e', 
                                transition: 'all 0.3s ease'
                        }}
                    >
                        <a href="# " className="lg:text-sm">
                            IMPORTADOS
                        </a>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Categories;
