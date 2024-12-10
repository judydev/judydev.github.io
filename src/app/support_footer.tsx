import React from 'react';

const SupportFooter = ({ googleFormLink, email = 'judydev23@gmail.com' }: { googleFormLink: string, email?: string }) => {
    return (
        <footer style={{
            width: '100%',
            padding: '2rem',
            marginTop: '2rem',
            borderTop: '1px solid rgba(var(--callout-border-rgb), 0.3)',
            textAlign: 'center',
        }}>
            <h2 style={{
                marginBottom: '1rem'
            }}>Support</h2>
            <p style={{
                fontFamily: 'var(--font-mono)',
            }}>
                If you have any feedback or suggestions, please fill out this <a href={googleFormLink} target="_blank" rel="noopener noreferrer" style={{color: '#0070f3', textDecoration: 'underline'}}>Google Form</a>.
                Or contact me at <a href={`mailto:${email}`} style={{color: '#0070f3', textDecoration: 'underline'}}>{email}</a>.
            </p>
        </footer>
    );
};

export default SupportFooter;
