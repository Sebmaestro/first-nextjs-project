import Link from 'next/link';

export default function page() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <button className="bg-blue-500 text-white font-bold rounded py-2 px-2 hover:bg-blue-700 
            focus:outline-none focus:ring-2 focus:ring-blue-300 md:bg-green-500 lg:bg-red-500 xl:bg-neutral-800">
                <Link href="/">clicky</Link>
            </button>
            <button className='bg-red-500 rounded'>buttonio</button>
        </div>
        
    )
}