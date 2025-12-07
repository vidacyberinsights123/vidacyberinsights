import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-6 text-center">
                Secure Your Digital Life
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl text-center">
                Expert cybersecurity insights tailored for you. Select your role to get started.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
                {['Individual', 'Student', 'Parent', 'SMB', 'Educator'].map((role) => (
                    <Link
                        key={role}
                        href={`/${role.toLowerCase()}`}
                        className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow hover:bg-blue-50 transition"
                    >
                        I am a {role}
                    </Link>
                ))}
            </div>
        </div>
    );
}
