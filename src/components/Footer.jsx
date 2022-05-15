import React from "react"


const correntYear = new Date().getFullYear()

const Footer = () => {
    return (
        <div className="footer">
            <p> © {correntYear} App Keep - Todos os direitos reservados</p>
        </div>
    )
}

export default Footer