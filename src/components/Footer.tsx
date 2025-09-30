import React from 'react';

const Footer: React.FC = () => {
    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 16px',
                background: 'var(--background-color)',
                color: 'var(--text-color)',
                fontSize: '1rem',
            }}
            className='max-w-7xl mx-auto'
        >
            {/* Left: Copyright */}
            <div>
                Copyright &copy; 2025 Mozammel
            </div>

            {/* Middle: Go to Top */}
            <div>
                <button
                    onClick={handleGoToTop}
                    style={{
                        color: 'var(--text-color)',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        padding: '0px 8px',
                        border: '1px solid var(--text-color)',
                        borderRadius: '4px',
                    }}
                    className='md:border-transparent'
                >
                    ^
                </button>
            </div>

            {/* Right: Social Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                    aria-label="LinkedIn"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                    aria-label="GitHub"
                >
                    GitHub
                </a>
                <a
                    href="mailto:yourmail@example.com"
                    style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                    aria-label="Mail"
                >
                    Mail
                </a>
            </div>
        </footer>
    );
};

export default Footer;