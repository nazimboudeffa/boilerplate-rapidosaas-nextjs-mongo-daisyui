"use client"

function Footer () {
    return (
        <footer className="bg-neutral">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <div className="flex text-gray-100">
                    <p>Crafted with <span className="text-red-500">❤</span> on <a href="https://github.com/nazimboudeffa"><u>GitHub</u></a></p> 
                </div>
                
                <div className="flex text-gray-100">
                    <p>&copy; 2024 ACME</p>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer