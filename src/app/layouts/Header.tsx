export default function Header({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div style={{ backgroundImage: 'url("img/person2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {children}
        </div>
    );
}