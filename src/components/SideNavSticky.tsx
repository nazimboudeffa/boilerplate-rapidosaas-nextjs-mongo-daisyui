export default function SideNavSticky() {
    return (
        <div className="hidden md:flex flex-col gap-10 mt-10 items-center">
            <div className="flex flex-col gap-2">
                <h1
                    className={`text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl`}
                >
                    Dashboard
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                    Welcome to your dashboard.
                </p>
            </div>
        </div>
    )
}