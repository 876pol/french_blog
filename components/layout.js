import Link from 'next/link';
export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='bg-pink-600 mb-8 py-4'>
                <div className='container mx-auto flex justify-center text-white text-lg font-medium hover:text-blue-100'>
                    <span className='mx-auto'><Link href='/'>Réflexions sur &quot;No et moi&quot;</Link></span>{' '}
                </div>
            </header>
            <main className='container mx-auto flex-1'>{children}</main>
            <footer className='bg-pink-600 mt-8 py-4'>
                <div className='container mx-auto flex justify-center text-white text-lg font-medium'>
                    Paul Chen | <a href='https://github.com/876pol/french_blog'>Github</a>
                </div>
            </footer>
        </div>
    );
}