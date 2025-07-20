import Image from 'next/image';

export const Logo = () => {
    return (
        <div className='flex items-center gap-2'>

            <Image
                src="/logo.png"
                alt="Logo"
                width={35}
                height={35}
                priority
            />
            <p className="font-montserrat font-semibold">ATTINI SOURCING</p>
        </div>
    )
}
