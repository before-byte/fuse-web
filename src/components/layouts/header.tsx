import { useEffect, useState } from 'react';

import { useSonnerToast } from '../../lib/toast';
import { cn } from '../../lib/utils';
import Icon from '../icon';

function Header() {
    const toast = useSonnerToast();

    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onDoc = () => {
        toast.success('Coming soon');
    };

    const onDownload = () => {
        toast.success('Coming soon');
    };

    return (
        <div
            className={cn(
                'fixed top-0 left-0 z-50 flex w-full items-center justify-center bg-transparent py-[10px] duration-75 md:py-[23px]',
                !isTop && 'bg-black/70',
            )}
        >
            <div className="flex w-full max-w-[1364px] items-center justify-between px-[20px] md:px-[42px]">
                <img className="w-[78px] md:w-[134px]" src="/svg/logo.svg" alt="" />

                <div className="flex">
                    <div onClick={onDoc} className="mr-[20px] flex cursor-pointer items-center md:mr-[38px]">
                        <Icon className="mr-[6px] h-[18px] w-[18px]" name="icon-doc"></Icon>
                        <p className="text-base font-medium text-white">docs</p>
                    </div>
                    <div
                        onClick={onDownload}
                        className="flex h-7 w-[85px] cursor-pointer items-center justify-center rounded-[27px] bg-[#ffcf13] text-sm font-medium text-[#0a0600] md:h-12 md:w-[121px] md:text-lg"
                    >
                        GET FUSE
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
