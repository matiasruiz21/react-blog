const NabVar = () => {
    return ( 
        <nav className="navbar">
            <h1>Mati Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Nuevo Blog</a>
            </div>
        </nav>
     );
}
 
export default NabVar;