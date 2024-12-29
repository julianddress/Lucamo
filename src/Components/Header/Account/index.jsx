import { User } from 'lucide-react';

const Account = () => {

    return (
        <div
        className="w-max flex items-center justify-self-end gap-4
                    md:gap-2
                    "
        >

            {/* User Account */}
            <div className="flex items-center gap-2">
                <span
                className="text-white text-center text-sm leading-4
                            lg:text-lg md:leading-5 lg:leading-6"
                >
                    Bienvenido,<br />Julian
                </span>
                <a href="# " className="text-center ">
                    <User size={34} color="white" className='md:size-11 xl:size-13' />
                </a>
            </div>
        </div>
    );
};

export { Account };
