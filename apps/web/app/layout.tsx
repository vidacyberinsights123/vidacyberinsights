import './global.css';
import { BlueprintSite } from '../components/BlueprintSite';
import "@fontsource/inter";
import "@fontsource/jetbrains-mono";

export const metadata = {
    title: 'Vidacyberinsights',
    description: 'Cybersecurity Education Platform',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <BlueprintSite>{children}</BlueprintSite>
            </body>
        </html>
    );
}
