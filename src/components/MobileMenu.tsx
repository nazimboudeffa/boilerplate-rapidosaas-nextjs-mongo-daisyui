import Link from "next/link"

export default function MobileMenu ({ open } : { open: boolean }) {
    return (
        <div className={`${open? "block" : "hidden"} flex flex-col`}>
            <Link href="/about">
                <span className="block h-16 leading-[4rem] pl-3">
                Explore
                </span>
            </Link>
            <Link href="/pricing">
                <span className="block h-16 leading-[4rem] pl-3">
                Explore
                </span>
            </Link>
        </div>
    )
}