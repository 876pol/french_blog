import Link from 'next/link';
export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='bg-pink-600 mb-8 py-4'>
                <div className='container mx-auto flex justify-center text-white text-lg font-medium hover:text-gray-300'>
                    <Link href='/'>Réflexions sur &quot;No et moi&quot;</Link>
                </div>
            </header>
            <main className='container mx-auto flex-1'>{children}</main>
            <footer className='bg-pink-600 mt-8 py-4'>
                <div className='container mx-auto flex justify-center text-white text-lg font-medium'>
                    Paul Chen |&nbsp;<span className='hover:text-gray-300'><Link href='https://github.com/876pol/french_blog'>Github</Link></span>
                </div>
            </footer>
        </div>
    );
}