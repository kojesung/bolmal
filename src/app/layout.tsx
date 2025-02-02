import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/nav/navigation';
import AuthProvider from '@/components/providers/SessionProvier';
import QueryProvider from '@/components/providers/QueryProvider.tsx';

export const metadata: Metadata = {
    title: '볼래말래',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <QueryProvider>
                    <AuthProvider>
                        <Navigation></Navigation>
                        {children}
                    </AuthProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
